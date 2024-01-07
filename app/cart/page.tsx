// import { api } from "@/trpc/react";
import React from "react";
import { api } from "@/trpc/react";
import VippsCheckoutButton from "../shopcart/_components/VippsCheckOutButton";
import VippsCheckoutElement from "../shopcart/_components/VippsCheckout";

type Props = {};

export default async function page({}: Props) {
  // const { data, mutate, isError } = api.vipps.vippsCreateSession.useMutation();
  const data = await api.vipps.vippsCreateSession.useMutation();

  if (data) {
    return (
      <>
        <form
          action={async () => {
            "use server";
            console.log("hello");
          }}
          className="w-full"
        >
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
