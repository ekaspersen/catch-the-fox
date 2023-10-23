import ProductCard from "./components/ProductCard";
export default function Shop() {
  return (
    <main className="min-h-screen ">
      <div className="flex w-full flex-col items-center gap-8 py-16">
        <div className="flex w-full flex-col items-center">
          <h1 className="text-5xl font-black text-clrprimary">MERCH SHOP</h1>
          <span className="text-2xl font-black">CATCH THE FOX</span>
        </div>
        <p className="font-light italic">
          et lite utvalg av Fette Fete klær{" "}
          <span className="text-xs">- LP</span>
        </p>
      </div>
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 grid-rows-3 gap-4 p-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
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
