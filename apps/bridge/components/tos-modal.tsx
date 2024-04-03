import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

import { dedicatedDeployment } from "@/config/dedicated-deployment";
import { isSuperbridge } from "@/config/superbridge";
import { deploymentTheme } from "@/config/theme";
import * as metadata from "@/constants/metadata";
import { useConfigState } from "@/state/config";
import { useSettingsState } from "@/state/settings";

import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";

export const TosModal = () => {
  const { t } = useTranslation();
  const dismiss = useSettingsState.useDismissTos();
  const hasViewedTos = useSettingsState.useHasViewedTos();
  const deployment = useConfigState.useDeployment();

  const theme = deploymentTheme(deployment);

  return (
    <Dialog open={!hasViewedTos} onOpenChange={() => {}}>
      <DialogContent hideCloseButton>
        <div className="flex flex-col gap-6 p-6 pt-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl tracking-tight">
              {t("tos.welcome", { name: metadata.title })}
            </h1>
            <p className="text-sm font-bold">{t("tos.pleaseNote")}</p>
          </div>
          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="none"
              viewBox="0 0 60 60"
              className="w-8 min-w-8 h-8 min-h-8"
            >
              <path
                fill="#CBCCBE"
                d="M18.44 21.56v1.97h2.12v-2.09c0-6.02 3.54-10.75 9.63-10.75 6.09 0 9.81 4.33 9.81 10.75v2.09h2.12v-1.97c0-7.78-3.88-12.99-11.84-12.99s-11.84 5.06-11.84 12.99z"
              ></path>
              <path
                fill="#666660"
                d="M13.45 27.1h33.63c.48 0 .91.36.91.88v21.8c0 .48-.42.88-.91.88H13.45c-.48 0-.88-.39-.88-.88v-21.8c0-.51.39-.88.88-.88z"
              ></path>
              <g clipPath="url(#clip0_176_399)">
                <path
                  fill="#fff"
                  d="M51.77 21.53L32.04 2.97C31.37 2.3 30.56 2 29.65 2H8.72C7.15 2 6 3.15 6 4.72v51.16c0 1.57 1.15 2.72 2.72 2.72H50.8c1.57 0 2.72-1.15 2.72-2.72V24.64c0-.94-.36-1.76-1.03-2.42l-.54-.48-.18-.21z"
                ></path>
                <path
                  fill="#000"
                  d="M32.1 22.16V8.02l15.02 14.14H32.1zM9.63 54.98V5.63h18.83v17.44c0 1.57 1.15 2.72 2.72 2.72h18.71v29.18H9.63v.01zM6 55.89c0 1.57 1.15 2.72 2.72 2.72H50.8c1.57 0 2.72-1.15 2.72-2.72V24.65c0-.94-.36-1.76-1.03-2.42l-.51-.48-.21-.21L32.04 2.97C31.37 2.3 30.56 2 29.65 2H8.72C7.15 2 6 3.15 6 4.72V55.89z"
                ></path>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.4"
                  d="M14.72 47.3c1.1-.97 2.23-1.9 3.36-2.83.56-.46 1.16-.93 1.88-1.03.17-.02.37-.01.47.12.07.09.08.2.08.31.03 1.17-.5 2.27-.83 3.39-.06.2-.1.44.05.59.08.08.21.11.32.1.37 0 .69-.27.96-.51.52-.47 1.03-.95 1.52-1.45.59-.6 1.19-1.24 1.98-1.49.14-.04.3-.08.44-.03.31.11.36.51.36.83 0 .63.01 1.27.02 1.9 0 .16 0 .32.07.47.22.5 5.17-.21 5.71-.31"
                ></path>
                <path
                  fill="#FF3801"
                  d="M15.42 15.63c-.64 0-1.16-.15-1.57-.45-.4-.3-.6-.73-.6-1.29 0-.12.01-.26.04-.43.07-.38.17-.84.3-1.38.37-1.46 1.31-2.19 2.83-2.19.41 0 .78.07 1.11.21.33.13.59.34.77.61.19.27.28.59.28.96 0 .11-.01.25-.04.42-.08.47-.18.93-.29 1.38-.19.73-.51 1.27-.97 1.64-.46.36-1.08.53-1.85.53l-.01-.01zm.11-1.15c.3 0 .56-.09.77-.26.21-.18.37-.44.46-.81.12-.5.22-.94.28-1.31.02-.11.03-.23.03-.34 0-.48-.26-.73-.77-.73-.3 0-.56.09-.77.26-.21.18-.36.44-.45.81-.1.36-.19.79-.29 1.31-.02.11-.03.22-.03.34 0 .49.26.73.77.73zM18.37 15.55c-.06 0-.1-.02-.14-.06-.03-.04-.03-.09-.02-.14l1.11-5.19c.01-.06.04-.11.09-.14.05-.04.1-.06.15-.06h2.14c.6 0 1.07.12 1.43.37.37.24.55.6.55 1.06 0 .13-.02.27-.05.41-.13.61-.41 1.06-.81 1.36-.4.29-.96.44-1.66.44h-1.09l-.37 1.75c-.01.06-.04.11-.09.14a.24.24 0 01-.15.06h-1.1.01zm2.85-3.05c.23 0 .42-.06.59-.18.17-.12.28-.3.34-.53.02-.09.02-.17.02-.24 0-.15-.05-.27-.14-.35-.09-.09-.25-.13-.47-.13h-.97l-.31 1.43H21.22z"
                ></path>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.4"
                  d="M13.24 24.06h15.22M13.24 29.53h29.99M13.24 35.2h20.38"
                  opacity="0.08"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_176_399">
                  <path
                    fill="#fff"
                    d="M0 0H47.53V56.61H0z"
                    transform="translate(6 2)"
                  ></path>
                </clipPath>
              </defs>
            </svg>
            <p className="text-sm">
              <Trans
                i18nKey={
                  isSuperbridge && !dedicatedDeployment
                    ? "tos.descriptionSuperbridge"
                    : isSuperbridge && !!dedicatedDeployment
                    ? "tos.descriptionSuperbridgeDedicated"
                    : !isSuperbridge && !dedicatedDeployment
                    ? "tos.descriptionRollbridge"
                    : "tos.descriptionRollbridgeDedicated"
                }
                components={[<span key="name" className="font-bold" />]}
                values={{ name: dedicatedDeployment?.network }}
              />{" "}
              <Link
                href={"https://docs.rollbridge.app/what-is-bridging"}
                className="underline"
                target="_blank"
              >
                {t("tos.learnMore")}
              </Link>
            </p>
          </div>

          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="none"
              viewBox="0 0 60 60"
              className="w-8 min-w-8 h-8 min-h-8"
            >
              <g clipPath="url(#clip0_176_414)">
                <path
                  fill="#fff"
                  d="M56.01 49.63H4.82c-1.21 0-1.82-.76-1.82-1.85V11.63c0-.87.76-1.63 1.63-1.63H56c.88 0 1.63.76 1.63 1.63v36.36c0 .88-.76 1.63-1.63 1.63l.01.01z"
                ></path>
                <path
                  fill="#EC00FF"
                  d="M25.19 21.84c1.57 0 3 .85 3.63 2.18.24.58.82.94 1.45.94s1.21-.36 1.48-.94c.64-1.33 2.06-2.18 3.6-2.18 2.18 0 3.94 1.63 3.94 3.66 0 2.75-2.45 6.08-4.6 8.6-1.67 1.94-3.78 4.24-4.42 4.24-.76 0-2.72-2.3-4.39-4.24-2.21-2.57-4.6-5.9-4.6-8.6 0-2.06 1.79-3.66 3.91-3.66z"
                ></path>
                <path
                  fill="#000"
                  d="M40.69 31.49c.91-1.57 1.48-3.09 1.73-4.48L54.38 15.2v28.88L40.7 31.49h-.01zm-19.4-5.99c0-2.06 1.79-3.66 3.91-3.66 1.57 0 3 .85 3.63 2.18.24.58.82.94 1.45.94s1.21-.36 1.48-.94c.64-1.33 2.06-2.18 3.6-2.18 2.18 0 3.94 1.63 3.94 3.66 0 2.75-2.45 6.08-4.6 8.6-1.67 1.94-3.78 4.24-4.42 4.24-.76 0-2.72-2.3-4.39-4.24-2.21-2.57-4.6-5.9-4.6-8.6zM8.9 13.27h42.78l-9.66 9.6c-1.09-2.51-3.66-4.3-6.66-4.3-1.94 0-3.75.76-5.09 2.03a7.384 7.384 0 00-5.09-2.03c-3.03 0-5.57 1.76-6.63 4.27L8.9 13.27zm-.3 33.09l13.17-12.11c.58.76 1.24 1.54 1.97 2.33 2 2.24 5.18 5.57 6.54 5.57 1.36 0 4.63-3.39 6.57-5.57.73-.79 1.39-1.57 2-2.36l13.17 12.14H8.6zm-2.33-2.3V15.24l11.87 11.75c.24 1.42.85 2.94 1.79 4.54L6.28 44.06h-.01zm-1.45 5.57h51.19c.88 0 1.63-.76 1.63-1.63V11.63c0-.88-.76-1.63-1.63-1.63H4.63C3.76 10 3 10.76 3 11.63v36.15c0 1.09.61 1.85 1.82 1.85z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_176_414">
                  <path
                    fill="#fff"
                    d="M0 0H54.64V39.63H0z"
                    transform="translate(3 10)"
                  ></path>
                </clipPath>
              </defs>
            </svg>
            <p className="text-sm">
              For help, you can always contact us at{" "}
              <Link
                href={`mailto:support@${
                  isSuperbridge ? "superbridge" : "rollbridge"
                }.app`}
                className="underline"
              >
                support@{isSuperbridge ? "superbridge" : "rollbridge"}.app
              </Link>
            </p>
          </div>
          {/* <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              fill="none"
              viewBox="0 0 61 60"
              className="w-8 min-w-8 h-8 min-h-8"
            >
              <path
                fill="#FF5"
                d="M13.77 27.64c0-1.79 1.51-3.27 3.27-3.27.88 0 1.76.36 2.39 1.06l9.08 9.93 13.11-18.25c.64-.88 1.63-1.33 2.66-1.33 1.73 0 3.27 1.33 3.27 3.24 0 .67-.18 1.36-.61 1.94L31.47 42.48c-.54.79-1.48 1.33-2.45 1.33-1.12 0-2-.3-2.63-1.03L14.61 29.85c-.58-.61-.85-1.42-.85-2.21h.01zm-9.24 2.18c0-14.5 11.75-26.25 26.25-26.25s26.25 11.75 26.25 26.25-11.75 26.25-26.25 26.25S4.53 44.32 4.53 29.82zm-3.57 0c0 16.44 13.38 29.82 29.82 29.82 16.44 0 29.82-13.38 29.82-29.82C60.6 13.38 47.22 0 30.78 0 14.34 0 .96 13.38.96 29.82zm28.25 17.41c2 0 3.84-1.12 5.03-2.75l15.47-21.52a6.658 6.658 0 001.27-3.91c0-3.72-3-6.72-6.72-6.72-2.09 0-4.18 1.09-5.39 2.79L28.18 29.98l-6.24-6.84c-1.24-1.36-3-2.18-4.87-2.18a6.69 6.69 0 00-6.72 6.72c0 1.67.61 3.27 1.73 4.48l11.81 12.9c1.42 1.54 3.15 2.18 5.33 2.18l-.01-.01z"
              ></path>
              <path
                fill="#5F5"
                d="M.96 29.82c0 16.44 13.38 29.82 29.82 29.82 16.44 0 29.82-13.38 29.82-29.82C60.6 13.38 47.22 0 30.78 0 14.34 0 .96 13.38.96 29.82zm28.06 13.99c-1.12 0-2-.3-2.63-1.03L14.61 29.85c-.58-.61-.85-1.42-.85-2.21 0-1.79 1.51-3.27 3.27-3.27.88 0 1.76.36 2.39 1.06l9.08 9.93 13.11-18.25c.64-.88 1.63-1.33 2.66-1.33 1.73 0 3.27 1.33 3.27 3.24 0 .67-.18 1.36-.61 1.94L31.46 42.48c-.54.79-1.48 1.33-2.45 1.33h.01z"
              ></path>
              <path
                fill="#fff"
                d="M29.02 43.81c-1.12 0-2-.3-2.63-1.03L14.61 29.85c-.58-.61-.85-1.42-.85-2.21 0-1.79 1.51-3.27 3.27-3.27.88 0 1.76.36 2.39 1.06l9.08 9.93 13.11-18.25c.64-.88 1.63-1.33 2.66-1.33 1.73 0 3.27 1.33 3.27 3.24 0 .67-.18 1.36-.61 1.94L31.46 42.48c-.54.79-1.48 1.33-2.45 1.33h.01z"
              ></path>
              <path
                fill="#000"
                d="M13.77 27.64c0-1.79 1.51-3.27 3.27-3.27.88 0 1.76.36 2.39 1.06l9.08 9.93 13.11-18.25c.64-.88 1.63-1.33 2.66-1.33 1.73 0 3.27 1.33 3.27 3.24 0 .67-.18 1.36-.61 1.94L31.47 42.48c-.54.79-1.48 1.33-2.45 1.33-1.12 0-2-.3-2.63-1.03L14.61 29.85c-.58-.61-.85-1.42-.85-2.21h.01zm-9.24 2.18c0-14.5 11.75-26.25 26.25-26.25s26.25 11.75 26.25 26.25-11.75 26.25-26.25 26.25S4.53 44.32 4.53 29.82zm-3.57 0c0 16.44 13.38 29.82 29.82 29.82 16.44 0 29.82-13.38 29.82-29.82C60.6 13.38 47.22 0 30.78 0 14.34 0 .96 13.38.96 29.82zm28.25 17.41c2 0 3.84-1.12 5.03-2.75l15.47-21.52a6.658 6.658 0 001.27-3.91c0-3.72-3-6.72-6.72-6.72-2.09 0-4.18 1.09-5.39 2.79L28.18 29.98l-6.24-6.84c-1.24-1.36-3-2.18-4.87-2.18a6.69 6.69 0 00-6.72 6.72c0 1.67.61 3.27 1.73 4.48l11.81 12.9c1.42 1.54 3.15 2.18 5.33 2.18l-.01-.01z"
              ></path>
            </svg>
            <p className="text-sm">
              By using this software you agree to our{" "}
              <Link href={"/terms"} className="underline">
                Terms &amp; conditions
              </Link>
            </p>
          </div> */}
          <Button onClick={dismiss}>{t("tos.agreeAndContinue")}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
