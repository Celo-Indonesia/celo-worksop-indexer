import { index, onchainTable } from "ponder";

export const activateEvent = onchainTable(
  "activate_event",
  (t) => ({
    id: t.text().primaryKey(),
    chainId: t.integer().notNull(),
    contractAddress: t.hex().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
    logIndex: t.integer().notNull(),
    activate: t.boolean().notNull(),
  }),
  (table) => ({
    timestampIdx: index().on(table.timestamp),
  }),
);

export const depositedEvent = onchainTable(
  "deposited_event",
  (t) => ({
    id: t.text().primaryKey(),
    chainId: t.integer().notNull(),
    contractAddress: t.hex().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
    logIndex: t.integer().notNull(),
    member: t.hex().notNull(),
    tokenAddress: t.hex().notNull(),
    tokenSymbol: t.text().notNull(),
    amount: t.bigint().notNull(),
  }),
  (table) => ({
    memberIdx: index().on(table.member),
    tokenIdx: index().on(table.tokenAddress),
    timestampIdx: index().on(table.timestamp),
  }),
);

export const financeSetEvent = onchainTable(
  "finance_set_event",
  (t) => ({
    id: t.text().primaryKey(),
    chainId: t.integer().notNull(),
    contractAddress: t.hex().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
    logIndex: t.integer().notNull(),
    newFinance: t.hex().notNull(),
  }),
  (table) => ({
    newFinanceIdx: index().on(table.newFinance),
    timestampIdx: index().on(table.timestamp),
  }),
);

export const pausedEvent = onchainTable(
  "paused_event",
  (t) => ({
    id: t.text().primaryKey(),
    chainId: t.integer().notNull(),
    contractAddress: t.hex().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
    logIndex: t.integer().notNull(),
    account: t.hex().notNull(),
  }),
  (table) => ({
    accountIdx: index().on(table.account),
    timestampIdx: index().on(table.timestamp),
  }),
);

export const registeredEvent = onchainTable(
  "registered_event",
  (t) => ({
    id: t.text().primaryKey(),
    chainId: t.integer().notNull(),
    contractAddress: t.hex().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
    logIndex: t.integer().notNull(),
    member: t.hex().notNull(),
    name: t.text().notNull(),
  }),
  (table) => ({
    memberIdx: index().on(table.member),
    timestampIdx: index().on(table.timestamp),
  }),
);

export const roleAdminChangedEvent = onchainTable(
  "role_admin_changed_event",
  (t) => ({
    id: t.text().primaryKey(),
    chainId: t.integer().notNull(),
    contractAddress: t.hex().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
    logIndex: t.integer().notNull(),
    role: t.hex().notNull(),
    previousAdminRole: t.hex().notNull(),
    newAdminRole: t.hex().notNull(),
  }),
  (table) => ({
    roleIdx: index().on(table.role),
    timestampIdx: index().on(table.timestamp),
  }),
);

export const roleGrantedEvent = onchainTable(
  "role_granted_event",
  (t) => ({
    id: t.text().primaryKey(),
    chainId: t.integer().notNull(),
    contractAddress: t.hex().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
    logIndex: t.integer().notNull(),
    role: t.hex().notNull(),
    account: t.hex().notNull(),
    sender: t.hex().notNull(),
  }),
  (table) => ({
    roleIdx: index().on(table.role),
    accountIdx: index().on(table.account),
    timestampIdx: index().on(table.timestamp),
  }),
);

export const roleRevokedEvent = onchainTable(
  "role_revoked_event",
  (t) => ({
    id: t.text().primaryKey(),
    chainId: t.integer().notNull(),
    contractAddress: t.hex().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
    logIndex: t.integer().notNull(),
    role: t.hex().notNull(),
    account: t.hex().notNull(),
    sender: t.hex().notNull(),
  }),
  (table) => ({
    roleIdx: index().on(table.role),
    accountIdx: index().on(table.account),
    timestampIdx: index().on(table.timestamp),
  }),
);

export const targetSetEvent = onchainTable(
  "target_set_event",
  (t) => ({
    id: t.text().primaryKey(),
    chainId: t.integer().notNull(),
    contractAddress: t.hex().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
    logIndex: t.integer().notNull(),
    newTargetTotal: t.bigint().notNull(),
  }),
  (table) => ({
    timestampIdx: index().on(table.timestamp),
  }),
);

export const unpausedEvent = onchainTable(
  "unpaused_event",
  (t) => ({
    id: t.text().primaryKey(),
    chainId: t.integer().notNull(),
    contractAddress: t.hex().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    transactionHash: t.hex().notNull(),
    logIndex: t.integer().notNull(),
    account: t.hex().notNull(),
  }),
  (table) => ({
    accountIdx: index().on(table.account),
    timestampIdx: index().on(table.timestamp),
  }),
);
