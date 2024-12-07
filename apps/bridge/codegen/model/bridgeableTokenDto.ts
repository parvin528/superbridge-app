/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * API
 * API docs
 * OpenAPI spec version: 1.0
 */
import type { CcipPoolDto } from './ccipPoolDto';
import type { HyperlaneRouterDto } from './hyperlaneRouterDto';
import type { OpBridgedUsdcDto } from './opBridgedUsdcDto';
import type { BridgeableTokenDtoOpBridgedUsdcV2 } from './bridgeableTokenDtoOpBridgedUsdcV2';
import type { SkyBridgeDto } from './skyBridgeDto';

export interface BridgeableTokenDto {
  address: string;
  bridges: number[];
  ccip?: CcipPoolDto;
  chainId: number;
  coinGeckoId?: string;
  decimals: number;
  hyperlane?: HyperlaneRouterDto;
  logoURI: string;
  lz?: OpBridgedUsdcDto;
  name: string;
  opBridgedUsdc?: OpBridgedUsdcDto;
  opBridgedUsdcV2?: BridgeableTokenDtoOpBridgedUsdcV2;
  sky?: SkyBridgeDto;
  symbol: string;
}
