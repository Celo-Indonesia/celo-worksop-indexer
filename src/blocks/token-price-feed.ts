import { ponder } from "ponder:registry";
import { tokenPriceFeedSnapshot } from "ponder:schema";

import { PriceFeedAbi } from "../../abis/PriceFeedAbi";
import { TOKENS } from "../constants/tokens";

ponder.on("TokenPriceFeed:block", async ({ event, context }) => {
  const priceFeedAddress = await context.client.readContract({
    abi: context.contracts.JointVentures.abi,
    address: context.contracts.JointVentures.address,
    functionName: "priceFeed",
  });

  for (const token of TOKENS) {
    const [price, decimals] = await context.client.readContract({
      abi: PriceFeedAbi,
      address: priceFeedAddress,
      functionName: "getChainlinkDataFeedLatestAnswer",
      args: [token.address],
    });

    await context.db.insert(tokenPriceFeedSnapshot).values({
      id: `${event.block.number}-${token.address}`,
      chainId: context.chain.id,
      blockNumber: event.block.number,
      timestamp: event.block.timestamp,
      priceFeedAddress,
      tokenAddress: token.address,
      tokenSymbol: token.symbol,
      price,
      decimals,
    });
  }
});
