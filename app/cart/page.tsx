// import { api } from "@/trpc/react";
import { api } from "@/trpc/server";
import React from "react";
import VippsCheckoutElement from "./_components/VippsCheckout";
import VippsCheckoutButton from "./_components/VippsCheckOutButton";

type Props = {};

export default async function page({}: Props) {
  // const { data, mutate, isError } = api.vipps.vippsCreateSession.useMutation();
  const data = await api.vipps.vippsCreateSession.mutate({ price: 200 });

  if (data) {
    return (
      <>
        <form action={async () => {
          'use server'
          console.log("hello")
        }}
        className="w-full">
          <VippsCheckoutButton />
        </form>
        <VippsCheckoutElement
          checkoutFrontendUrl={data?.checkoutFrontendUrl}
          token={data?.token}
        />
      </>
    );
  }

  return <>test</>;
}
