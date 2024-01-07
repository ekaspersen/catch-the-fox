"use client";
import React from "react";
import useCart from "../store/useCart";

type Props = {};

export default function CartLengthCounter({}: Props) {
  const { cart } = useCart();
  if (cart.length === 0) return null;
  return (
    <div className="absolute right-[-12px] top-[-8px] grid h-5 w-5 place-content-center rounded-full border border-clrprimary bg-clrwhite text-xs text-clrprimarydark">
      {cart.length > 99 ? "99+" : cart.length}
    </div>
  );
}
