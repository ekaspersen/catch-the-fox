import "./globals.css";

import Link from "next/link";
import PhoneSVG from "./icon/phonesvg";

import { Montserrat } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { headers } from "next/headers";
import ShopCart from "./components/Shoppingcart";
import Navbar from "./components/navbar";

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
          <Navbar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
