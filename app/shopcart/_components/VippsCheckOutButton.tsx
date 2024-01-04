"use client";
import React, { useEffect } from "react";
import { api } from "@/trpc/server";

const VippsCheckoutButton = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src =
      "https://checkout.vipps.no/checkout-button/v1/vipps-checkout-button.js";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://checkout.vipps.no/vippsCheckoutSDK.js";
    script2.async = true;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  // Directly return the vipps-checkout-button element in the render method
  return (
    <vipps-checkout-button
      id="checkout-button"
      variant="purple"
      branded
    ></vipps-checkout-button>
  );
};

export default VippsCheckoutButton;
