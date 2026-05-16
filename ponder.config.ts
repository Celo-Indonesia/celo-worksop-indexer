import { createConfig } from "ponder";

import { JoinVenturesAbi } from "./abis/JointVenturesAbi";

export default createConfig({
  chains: {
    celo: {
      id: 42220,
      rpc: process.env.PONDER_RPC_URL_1!,
    },
  },
  contracts: {
    JoinVentures: {
      chain: "celo",
      abi: JoinVenturesAbi,
      address: "0x71b1F377Ca50836A3F07EadC44F45BE4E78799cF",
      startBlock: 67016247,
    },
  },
});
