import { createConfig } from "ponder";

import { JointVenturesAbi } from "./abis/JointVenturesAbi";

export default createConfig({
  chains: {
    celo: {
      id: 42220,
      rpc: process.env.PONDER_RPC_URL_1!,
    },
  },
  contracts: {
    JointVentures: {
      chain: "celo",
      abi: JointVenturesAbi,
      address: "0x71b1F377Ca50836A3F07EadC44F45BE4E78799cF",
      startBlock: 67016247,
    },
  },
  blocks: {
    TokenPriceFeed: {
      chain: "celo",
      interval: 120,
      startBlock: 67016247,
    },
  },
});
