import "./globals.css";

import Link from "next/link";
import PhoneSVG from "./icon/phonesvg";

import { Montserrat } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { headers } from "next/headers";
import ShopCart from "./components/Shoppingcart";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "CATCH THE FOX",
  description: "Nettsiden til rockebandet Catch The Fox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* add cn at later point */}
      <body
        className={
          montserrat.className +
          " " +
          "bg-clrdark pt-10 font-sans text-clrwhite sm:pt-[44px]"
        }
      >
        <TRPCReactProvider headers={headers()}>
          <div className=" fixed left-0 right-0 top-0 z-50 bg-clrprimary">
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
                <Link href="/shopcart">
                  <ShopCart />
                </Link>
              </div>
            </nav>
          </div>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
