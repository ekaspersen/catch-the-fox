import Link from "next/link";
import React from "react";
import PhoneSVG from "../icon/phonesvg";
import ShopCart from "./Shoppingcart";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className=" fixed left-0 right-0 top-0 z-50 bg-clrprimary">
      <nav className="mx-auto flex max-w-7xl justify-between px-4 py-2 text-sm font-black italic lg:text-lg ">
        <div className="flex gap-6">
          <Link href="/">HOME</Link>
          <Link href="/#aboutus">ABOUT US</Link>
          <Link href="/shop">MERCH SHOP</Link>
        </div>
        <div className="flex gap-6">
          <Link className="flex items-center" href="/#kontakt">
            <PhoneSVG />
          </Link>
          <button>
            <ShopCart />
          </button>
        </div>
      </nav>
    </header>
  );
}
