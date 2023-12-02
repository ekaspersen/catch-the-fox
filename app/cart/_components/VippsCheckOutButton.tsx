"use client";
import React, { useEffect } from "react";

const VippsCheckoutButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://checkout.vipps.no/checkout-button/v1/vipps-checkout-button.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Directly return the vipps-checkout-button element in the render method
  return (
    <button>
      <vipps-checkout-button
        id="checkout-button"
        variant="orange"
        branded={true}
      ></vipps-checkout-button>
    </button>
  );
};

export default VippsCheckoutButton;
