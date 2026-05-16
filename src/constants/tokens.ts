export const USDC = "0x265971bcd643f3DcCB5c94111A3E3AD5542189Be";
export const USDT = "0x1275F3565F9F28370856109f7C886F94b9816308";

export const TOKENS = [
  { symbol: "USDC", address: USDC },
  { symbol: "USDT", address: USDT },
] as const;

export const getTokenByAddress = (address: `0x${string}`) =>
  TOKENS.find((token) => token.address.toLowerCase() === address.toLowerCase());
