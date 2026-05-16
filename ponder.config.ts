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
      address: "0x801adC397899f7420F9ddFdA9f048C676A548B94",
      startBlock: 67041113,
    },
  },
  blocks: {
    TokenPriceFeed: {
      chain: "celo",
      interval: 120,
      startBlock: 67041113,
    },
  },
});
