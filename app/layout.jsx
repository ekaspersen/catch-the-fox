import Link from "next/link";
import "./globals.css";
import PhoneSVG from "./icon/phonesvg";

export const metadata = {
    title: "CATCH THE FOX",
    description: "Nettsiden til rockebandet Catch The Fox",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                ></link>
            </head>
            <body className="bg-clrdark text-clrwhite font-sans pt-10 sm:pt-[44px]">
                <div className=" bg-clrprimary fixed top-0 right-0 left-0 z-50">
                    <nav className="mx-auto max-w-7xl flex px-4 py-2 justify-between font-bold italic text-sm lg:text-lg ">
                        <div className="flex items-center gap-6">
                            <Link href="/">HOME</Link>
                            <Link href="/shop">MERCH SHOP</Link>
                        </div>
                        <Link className="flex gap-2" href="/#kontakt">
                            <PhoneSVG />
                            <span className="hidden lg:block text-clrdark">
                                KONTAKT OSS
                            </span>
                        </Link>
                    </nav>
                </div>

                {children}
            </body>
        </html>
    );
}
