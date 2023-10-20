import ProductCard from "./components/ProductCard";
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
            <section className="grid w-full max-w-7xl mx-auto p-4 gap-4 grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-3">
                <ProductCard />
                {/* Compare this snippet from app/shop/components/ProductCard.jsx */}
                {/* <div className="bg-clrprimary px-4 py-8 gap-8 items-center flex flex-col">
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
                </div> */}
            </section>
        </main>
    );
}
