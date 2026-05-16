import { index, onchainTable } from "ponder";

export const tokenPriceFeedSnapshot = onchainTable(
  "token_price_feed_snapshot",
  (t) => ({
    id: t.text().primaryKey(),
    chainId: t.integer().notNull(),
    blockNumber: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    priceFeedAddress: t.hex().notNull(),
    tokenAddress: t.hex().notNull(),
    tokenSymbol: t.text().notNull(),
    price: t.bigint().notNull(),
    decimals: t.bigint().notNull(),
  }),
  (table) => ({
    tokenIdx: index().on(table.tokenAddress),
    timestampIdx: index().on(table.timestamp),
  }),
);
