export const USDC = "0xcebA9300f2b948710d2653dD7B07f33A8B32118C";
export const USDT = "0x617f3112bf5397D0467D315cC709EF968D9ba546";

export const TOKENS = [
  { symbol: "USDC", address: USDC },
  { symbol: "USDT", address: USDT },
] as const;

export const getTokenByAddress = (address: `0x${string}`) =>
  TOKENS.find((token) => token.address.toLowerCase() === address.toLowerCase());
