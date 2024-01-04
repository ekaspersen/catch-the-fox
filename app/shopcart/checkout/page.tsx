import React from "react";
import VippsCheckoutElement from "../_components/VippsCheckout";
import { api } from "@/trpc/server";

type Props = {};

export default async function page({}: Props) {
  const data = await api.vipps.vippsCreateSession.mutate({ price: 200 });
  return (
    <main className="p-10">
      {data && (
        <VippsCheckoutElement
          checkoutFrontendUrl={data?.checkoutFrontendUrl}
          token={data?.token}
        />
      )}
    </main>
  );
}
