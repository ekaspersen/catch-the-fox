"use client";

import React from "react";
import Script from "next/script";
import dynamic from "next/dynamic";

const ProductsInCart = dynamic(
  () => import("./_components/ProductCartWithProducts"),
  { ssr: false, loading: () => <p>Loading...</p>, },
);

export default function ShopCart() {

  return (
    <main>
      <div className="flex w-full flex-col items-center gap-2 py-16">
        <h1 className="text-5xl font-black text-clrprimary">YOUR CART</h1>
        <span className="text-2xl font-black">CATCH THE FOX</span>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 bg-clrprimary px-8 py-4">
        <div className="flex w-full flex-col gap-2">
          <ProductsInCart />
        </div>
      </div>
      <Script src="https://checkout.vipps.no/checkout-button/v1/vipps-checkout-button.js" />
      <Script src="https://checkout.vipps.no/vippsCheckoutSDK.js" />
    </main>
  );
}
