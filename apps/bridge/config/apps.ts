import { AppConfig } from "@/types/app-config";

import { SUPERBRIDGE_HOST, SUPERBRIDGE_TESTNET_HOST } from "../constants/hosts";
import { hyperlaneTheme, renzoTheme, superbridgeTheme } from "./themes";

const superbidge: AppConfig = {
  head: {
    name: "Superbridge",
    description: "Bridge ETH and ERC20 tokens into and out of the Superchain",
    og: "https://superbridge.app/og/superbridge-og-image.png",
    favicon: "/img/superbridge/favicon-32x32.png",
  },

  images: {
    logoLight: "/img/logo.svg",
    logoDark: "/img/logo-dark.svg",
    logoLightSmall: "/img/logo-small.svg",
    logoDarkSmall: "/img/logo-small-dark.svg",
  },
  theme: superbridgeTheme,

  links: [],
};

const renzo: AppConfig = {
  head: {
    name: "Renzo",
    description: "Bridge ezETH between Base, Blast, Ethereum and more",
    og: "https://superbridge.app/og/superbridge-og-image.png",
    favicon: "/img/superbridge/favicon-32x32.png",
  },
  images: {
    logoLight: "/img/renzo/logo.svg",
    logoDark: "/img/renzo/logo.svg",
    logoLightSmall: "/img/renzo/logo.svg",
    logoDarkSmall: "/img/renzo/logo.svg",
  },
  theme: renzoTheme,

  links: [],
};

const hyperlane: AppConfig = {
  head: {
    name: "Hyperlane",
    description: "Bridge tokens between supported Hyperlane chains",
    og: "https://superbridge.app/og/superbridge-og-image.png",
    favicon: "/img/superbridge/favicon-32x32.png",
  },
  images: {
    logoLight: "/img/hyperlane/logo.svg",
    logoDark: "/img/hyperlane/logo.svg",
    logoLightSmall: "/img/hyperlane/logo.svg",
    logoDarkSmall: "/img/hyperlane/logo.svg",
  },
  theme: hyperlaneTheme,

  links: [],
};

export const frontendApps: { [x: string]: AppConfig | undefined } = {
  [SUPERBRIDGE_HOST]: superbidge,
  [SUPERBRIDGE_TESTNET_HOST]: superbidge,
  ["renzo.superbridge.app"]: renzo,
  ["hyperlane.superbridge.app"]: hyperlane,
};