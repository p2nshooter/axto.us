export const SUPPORTED_CRYPTO = ['btc', 'eth', 'bnb', 'sol', 'doge', 'usdt'] as const;
export type CryptoCurrency = (typeof SUPPORTED_CRYPTO)[number];

export const CRYPTO_LABELS: Record<CryptoCurrency, string> = {
  btc: 'Bitcoin (BTC)',
  eth: 'Ethereum (ETH)',
  bnb: 'BNB (BNB)',
  sol: 'Solana (SOL)',
  doge: 'Dogecoin (DOGE)',
  usdt: 'Tether (USDT)'
};

export function isCryptoCurrency(value: string): value is CryptoCurrency {
  return (SUPPORTED_CRYPTO as readonly string[]).includes(value);
}
