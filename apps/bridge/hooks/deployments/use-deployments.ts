import { useMemo } from "react";

import { isSuperbridge } from "@/config/app";
import {
  SUPERCHAIN_MAINNETS,
  SUPERCHAIN_TESTNETS,
} from "@/constants/superbridge";
import { useInjectedStore } from "@/state/injected";

import { useAllDeployments } from "./use-all-deployments";

export const useDeployments = () => {
  const allDeployments = useAllDeployments();
  const testnets = useInjectedStore((store) => store.testnets);

  return useMemo(() => {
    if (isSuperbridge) {
      if (testnets) {
        return allDeployments.filter(({ name }) =>
          SUPERCHAIN_TESTNETS.includes(name)
        );
      } else {
        return allDeployments.filter(({ name }) =>
          SUPERCHAIN_MAINNETS.includes(name)
        );
      }
    }
    return allDeployments;
  }, [allDeployments, testnets]);
};