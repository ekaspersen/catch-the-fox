"use client";
import { api } from "@/trpc/server";
import React, { useEffect } from "react";


type Props = {
  checkoutFrontendUrl: string;
  token: string;
};

export default function VippsCheckoutElement({
  checkoutFrontendUrl,
  token,
}: Props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.vipps.no/vippsCheckoutSDK.js";
    script.async = true;
    script.onload = () => {
      if (window.VippsCheckout) {
        window.VippsCheckout({
          checkoutFrontendUrl: checkoutFrontendUrl,
          iFrameContainerId: "vipps-checkout-frame-container",
          language: "no",
          token: token,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [checkoutFrontendUrl, token]);

  // Empty dependency array means this effect will only run once
  return <div id="vipps-checkout-frame-container" />;
}
