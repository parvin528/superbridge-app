import { useDeployment } from "@/hooks/use-deployment";
import { useConfigState } from "@/state/config";

import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";

export const FaultProofsBanner = () => {
  const deployment = useDeployment();
  const setInfoModalOpen = useConfigState.useSetFaultProofInfoModal();

  return (
    <Alert variant={"horizontal"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
      >
        <path
          d="M10.9641 8.63807C10.9641 8.13825 11.1894 7.86018 11.6575 7.86018C12.1257 7.86018 12.3615 8.13825 12.3615 8.63807C12.3615 9.1379 11.8511 13.5413 11.742 14.372C11.7315 14.467 11.7103 14.562 11.6575 14.562C11.6047 14.562 11.5836 14.4881 11.5731 14.3579C11.478 13.5378 10.9641 9.11678 10.9641 8.63455V8.63807ZM10.9641 18.2474C10.9641 17.8743 11.2739 17.5645 11.6575 17.5645C12.0412 17.5645 12.3404 17.8743 12.3404 18.2474C12.3404 18.6205 12.0306 18.9408 11.6575 18.9408C11.2844 18.9408 10.9641 18.631 10.9641 18.2474ZM2.65015 21.9996H20.6473C22.0342 21.9996 22.7029 20.9014 22.0553 19.7081L13.0092 2.99921C12.2841 1.66869 11.0486 1.66869 10.3235 2.98865L1.24571 19.6976C0.605095 20.8908 1.26683 21.9996 2.65367 21.9996H2.65015Z"
          fill="#FFFF55"
        />
        <path
          d="M9.68292 8.63813C9.68292 9.20132 10.2355 13.6258 10.3763 14.5727C10.4925 15.3822 10.9958 15.8398 11.6541 15.8398C12.358 15.8398 12.8051 15.3189 12.9212 14.5727C13.1571 13.1014 13.6358 9.20132 13.6358 8.63813C13.6358 7.58217 12.8262 6.58252 11.6541 6.58252C10.4819 6.58252 9.68292 7.59625 9.68292 8.63813ZM11.6646 20.2291C12.7417 20.2291 13.6252 19.3456 13.6252 18.2369C13.6252 17.1281 12.7417 16.2763 11.6646 16.2763C10.5875 16.2763 9.67236 17.1598 9.67236 18.2369C9.67236 19.314 10.5559 20.2291 11.6646 20.2291Z"
          fill="white"
        />
        <path
          d="M10.9641 8.63807C10.9641 8.13825 11.1894 7.86018 11.6575 7.86018C12.1257 7.86018 12.3615 8.13825 12.3615 8.63807C12.3615 9.1379 11.8511 13.5413 11.742 14.372C11.7315 14.467 11.7103 14.562 11.6575 14.562C11.6047 14.562 11.5836 14.4881 11.5731 14.3579C11.478 13.5378 10.9641 9.11678 10.9641 8.63455V8.63807ZM10.9641 18.2474C10.9641 17.8743 11.2739 17.5645 11.6575 17.5645C12.0412 17.5645 12.3404 17.8743 12.3404 18.2474C12.3404 18.6205 12.0306 18.9408 11.6575 18.9408C11.2844 18.9408 10.9641 18.631 10.9641 18.2474ZM9.68288 8.63807C9.68288 9.20125 10.2355 13.6258 10.3763 14.5726C10.4925 15.3822 10.9958 15.8398 11.654 15.8398C12.358 15.8398 12.805 15.3188 12.9212 14.5726C13.157 13.1013 13.6357 9.20125 13.6357 8.63807C13.6357 7.58211 12.8261 6.58246 11.654 6.58246C10.4819 6.58246 9.68288 7.59619 9.68288 8.63807ZM9.67232 18.2368C9.67232 19.3456 10.5558 20.2291 11.6646 20.2291C12.7733 20.2291 13.6252 19.3456 13.6252 18.2368C13.6252 17.128 12.7417 16.2762 11.6646 16.2762C10.5875 16.2762 9.67232 17.1597 9.67232 18.2368ZM2.3756 20.3171L11.4534 3.60815C11.742 3.06609 11.5907 3.06609 11.8793 3.59759L20.9254 20.3065C21.1718 20.7535 21.1929 20.7218 20.6473 20.7218H2.65015C2.10809 20.7218 2.12921 20.7535 2.37208 20.3171H2.3756ZM2.65015 21.9996H20.6473C22.0342 21.9996 22.7029 20.9014 22.0553 19.7081L13.0092 2.99921C12.2841 1.66869 11.0486 1.66869 10.3235 2.98865L1.24571 19.6976C0.605095 20.8908 1.26683 21.9996 2.65367 21.9996H2.65015Z"
          fill="black"
        />
      </svg>
      <AlertTitle>{deployment?.l2.name} Fault Proof upgrade</AlertTitle>
      <AlertDescription>
        <Button
          variant={"secondary"}
          size={"xs"}
          onClick={() => setInfoModalOpen(true)}
        >
          More
        </Button>
      </AlertDescription>
    </Alert>
  );
};
