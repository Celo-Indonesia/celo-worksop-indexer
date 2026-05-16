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
      address: "0xE981Bb5e5F9b441A373881C8FE9F6db1322aDb95",
      startBlock: 67046133,
    },
  },
  blocks: {
    TokenPriceFeed: {
      chain: "celo",
      interval: 120,
      startBlock: 67046133,
    },
  },
});
