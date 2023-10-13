import Image from "next/image";
import ButtonChooseSize from "./components/ButtonChooseSize";

export default function Shop() {
    return (
        <main className="min-h-screen ">
            <div className="flex flex-col items-center w-full py-16 gap-8">
                <div className="flex flex-col items-center w-full">
                    <h1 className="font-black text-5xl text-clrprimary">
                        MERCH SHOP
                    </h1>
                    <span className="font-black text-2xl">CATCH THE FOX</span>
                </div>
                <p className="italic font-light">
                    et lite utvalg av Fette Fete klær{" "}
                    <span className="text-xs">- LP</span>
                </p>
            </div>
            <section className="grid w-full max-w-7xl mx-auto p-4 gap-4 grid-cols-1 grid-rows-5 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3">
                <div className="bg-clrprimary px-4 py-8 gap-8 items-center flex flex-col">
                    <div className="flex flex-col items-center">
                        <Image
                            className="object-contain max-h-80"
                            src="/white-t-fox.png"
                            alt="graphic Catch the fox t-shirt"
                            width={400}
                            height={450}
                        />
                        <p className="font-black italic text-xl">
                            CTF graphic t-shirt
                        </p>
                    </div>
                    <button className="py-4 px-8 mt-auto bg-clrdark w-fit font-extrabold">
                        MORE
                    </button>
                </div>
                <div className="bg-clrdark gap-4 grid row-span-2 md:grid-cols-2 md:row-span-2 md:col-span-2 lg:row-span-1 lg:grid-cols-3 lg:col-span-3">
                    <div className="flex-1 bg-clrprimary grid place-items-center relative">
                        <div className="w-60 h-60 bg-clrdark outline outline-4 outline-offset-8 outline-clrdark"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 gap-2 flex items-center bg-clrdark bg-opacity-60">
                            <div className="bg-clrdark h-14 w-14"></div>
                            <div className="bg-clrdark h-14 w-14"></div>
                            <div className="bg-clrdark h-14 w-14"></div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-around">
                        <div className="flex flex-col items-center">
                            <Image
                                className="object-contain max-h-60"
                                src="/white-t-fox.png"
                                alt="graphic Catch the fox t-shirt"
                                width={400}
                                height={450}
                            />
                            <p className="font-black italic text-xl">
                                CTF graphic t-shirt
                            </p>
                        </div>
                        <div className="flex gap-2 flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex gap-4 items-center">
                                    <span className="relative text-3xl font-black">
                                        300kr
                                        <span className="absolute top-0 left-0 italic text-clrprimary">
                                            300kr
                                        </span>
                                    </span>
                                    <ButtonChooseSize />
                                </div>
                            </div>

                            <span className="font-extrabold opacity-60">
                                Pick a size to continue to checkout
                            </span>
                        </div>
                    </div>

                    <div className="flex-1 bg-clrdark grid place-items-center relative md:col-span-2 lg:col-span-1">
                        <div className="w-60 h-60 rounded-full bg-clrprimary outline outline-4 outline-offset-8 outline-clrprimary"></div>
                    </div>
                </div>
                <div className="bg-clrprimary px-4 py-8 gap-8 items-center flex flex-col">
                    <div className="flex flex-col items-center">
                        <Image
                            className="object-contain max-h-80"
                            src="/black-t-munch.png"
                            alt="black-t-munch"
                            width={400}
                            height={450}
                        />
                        <p className="font-black italic text-xl">
                            CTF graphic t-shirt
                        </p>
                    </div>
                    <button className="py-4 px-8 mt-auto bg-clrdark w-fit font-extrabold">
                        MORE
                    </button>
                </div>
                <div className="bg-clrprimary px-4 py-8 gap-8 items-center flex flex-col">
                    <div className="flex flex-col items-center">
                        <Image
                            className="object-contain max-h-80"
                            src="/white-t-munch.png"
                            alt="white-t-munch"
                            width={400}
                            height={450}
                        />
                        <p className="font-black italic text-xl">
                            CTF graphic t-shirt
                        </p>
                    </div>
                    <button className="py-4 px-8 mt-auto bg-clrdark w-fit font-extrabold">
                        MORE
                    </button>
                </div>
            </section>
        </main>
    );
}
