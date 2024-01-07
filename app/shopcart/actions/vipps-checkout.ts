"use server";

import { api } from "@/trpc/server";

export default async function vippsCheckout({ price }: { price: number }) {
  try {
    const mutation = await api.vipps.vippsCreateSession.mutate({ price });
    const vippsCheckout = await window.VippsCheckout({
      checkoutFrontendUrl: mutation.checkoutFrontendUrl,
      iFrameContainerId: "vipps-checkout-frame-container",
      language: "no",
      token: mutation.token,
    });
    return;
  } catch (error) {
    console.log("from server ", error);
  }
}
