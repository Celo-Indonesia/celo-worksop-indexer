export const USDC = "0x4237aD5a35B4640BE503d2371155afd7B79CaEb6";
export const USDT = "0x227e8688f1fc0C6C2f7606bC6690fe2C00a847a1";

export const TOKENS = [
  { symbol: "USDC", address: USDC },
  { symbol: "USDT", address: USDT },
] as const;

export const getTokenByAddress = (address: `0x${string}`) =>
  TOKENS.find((token) => token.address.toLowerCase() === address.toLowerCase());
