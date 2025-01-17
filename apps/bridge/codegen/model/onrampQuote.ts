/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * API
 * API docs
 * OpenAPI spec version: 1.0
 */
import type { OnrampFee } from './onrampFee';
import type { MoonPayQuoteDto } from './moonPayQuoteDto';
import type { OnrampQuoteProvider } from './onrampQuoteProvider';

export interface OnrampQuote {
  fees: OnrampFee[];
  fiatAmount: string;
  fiatCurrency: string;
  moonPay?: MoonPayQuoteDto;
  provider: OnrampQuoteProvider;
  tokenAmount: string;
}
