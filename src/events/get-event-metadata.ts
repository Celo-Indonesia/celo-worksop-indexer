export type EventMetadata = {
  id: string;
  chainId: number;
  contractAddress: `0x${string}`;
  blockNumber: bigint;
  timestamp: bigint;
  transactionHash: `0x${string}`;
  logIndex: number;
};

type PonderEvent = {
  block: {
    number: bigint;
    timestamp: bigint;
  };
  log: {
    address: `0x${string}`;
    logIndex: number;
  };
  transaction: {
    hash: `0x${string}`;
  };
};

export const getEventMetadata = (
  event: PonderEvent,
  chainId: number,
): EventMetadata => ({
  id: `${event.transaction.hash}-${event.log.logIndex}`,
  chainId,
  contractAddress: event.log.address,
  blockNumber: event.block.number,
  timestamp: event.block.timestamp,
  transactionHash: event.transaction.hash,
  logIndex: event.log.logIndex,
});
