import { ponder } from "ponder:registry";
import { decodeFunctionData } from "viem";
import {
  activateEvent,
  depositedEvent,
  financeSetEvent,
  pausedEvent,
  registeredEvent,
  roleAdminChangedEvent,
  roleGrantedEvent,
  roleRevokedEvent,
  targetSetEvent,
  unpausedEvent,
} from "ponder:schema";

import { JointVenturesAbi } from "../../abis/JointVenturesAbi";
import { getTokenByAddress } from "../constants/tokens";
import { getEventMetadata } from "./get-event-metadata";

ponder.on("JointVentures:Activate", async ({ event, context }) => {
  await context.db.insert(activateEvent).values({
    ...getEventMetadata(event, context.chain.id),
    activate: event.args.activate,
  });
});

ponder.on("JointVentures:Deposited", async ({ event, context }) => {
  const depositCall = decodeFunctionData({
    abi: JointVenturesAbi,
    data: event.transaction.input,
  });

  if (depositCall.functionName !== "deposit") {
    throw new Error("Unable to decode token address from deposit transaction");
  }

  const [tokenAddress] = depositCall.args;
  const token = getTokenByAddress(tokenAddress);

  await context.db.insert(depositedEvent).values({
    ...getEventMetadata(event, context.chain.id),
    member: event.args.member,
    tokenAddress,
    tokenSymbol: token?.symbol ?? "UNKNOWN",
    amount: event.args.amount,
  });
});

ponder.on("JointVentures:FinanceSet", async ({ event, context }) => {
  await context.db.insert(financeSetEvent).values({
    ...getEventMetadata(event, context.chain.id),
    newFinance: event.args.newFinance,
  });
});

ponder.on("JointVentures:Paused", async ({ event, context }) => {
  await context.db.insert(pausedEvent).values({
    ...getEventMetadata(event, context.chain.id),
    account: event.args.account,
  });
});

ponder.on("JointVentures:Registered", async ({ event, context }) => {
  await context.db.insert(registeredEvent).values({
    ...getEventMetadata(event, context.chain.id),
    member: event.args.member,
    name: event.args.name,
  });
});

ponder.on("JointVentures:RoleAdminChanged", async ({ event, context }) => {
  await context.db.insert(roleAdminChangedEvent).values({
    ...getEventMetadata(event, context.chain.id),
    role: event.args.role,
    previousAdminRole: event.args.previousAdminRole,
    newAdminRole: event.args.newAdminRole,
  });
});

ponder.on("JointVentures:RoleGranted", async ({ event, context }) => {
  await context.db.insert(roleGrantedEvent).values({
    ...getEventMetadata(event, context.chain.id),
    role: event.args.role,
    account: event.args.account,
    sender: event.args.sender,
  });
});

ponder.on("JointVentures:RoleRevoked", async ({ event, context }) => {
  await context.db.insert(roleRevokedEvent).values({
    ...getEventMetadata(event, context.chain.id),
    role: event.args.role,
    account: event.args.account,
    sender: event.args.sender,
  });
});

ponder.on("JointVentures:TargetSet", async ({ event, context }) => {
  await context.db.insert(targetSetEvent).values({
    ...getEventMetadata(event, context.chain.id),
    newTargetTotal: event.args.newTargetTotal,
  });
});

ponder.on("JointVentures:Unpaused", async ({ event, context }) => {
  await context.db.insert(unpausedEvent).values({
    ...getEventMetadata(event, context.chain.id),
    account: event.args.account,
  });
});
