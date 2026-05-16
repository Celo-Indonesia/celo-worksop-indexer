import { ponder } from "ponder:registry";
import { tokenPriceFeedSnapshot } from "ponder:schema";

import { PriceFeedAbi } from "../../abis/PriceFeedAbi";
import { TOKENS } from "../constants/tokens";

const isPriceFeedResult = (result: unknown): result is readonly [bigint, bigint] =>
  Array.isArray(result) &&
  typeof result[0] === "bigint" &&
  typeof result[1] === "bigint";

ponder.on("TokenPriceFeed:block", async ({ event, context }) => {
  const priceFeedAddress = await context.client.readContract({
    abi: context.contracts.JointVentures.abi,
    address: context.contracts.JointVentures.address,
    functionName: "priceFeed",
  });

  const priceFeedResults = await context.client.multicall({
    contracts: TOKENS.map((token) => ({
      abi: PriceFeedAbi,
      address: priceFeedAddress,
      functionName: "getChainlinkDataFeedLatestAnswer",
      args: [token.address],
    })),
  });

  for (const [index, result] of priceFeedResults.entries()) {
    const token = TOKENS[index];

    if (
      token === undefined ||
      result.status !== "success" ||
      !isPriceFeedResult(result.result)
    ) {
      continue;
    }

    const [price, priceDecimals] = result.result;

    await context.db.insert(tokenPriceFeedSnapshot).values({
      id: `${event.block.number}-${token.address}`,
      chainId: context.chain.id,
      blockNumber: event.block.number,
      timestamp: event.block.timestamp,
      priceFeedAddress,
      tokenAddress: token.address,
      tokenSymbol: token.symbol,
      price,
      priceDecimals,
    });
  }
});
