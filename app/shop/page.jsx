import Image from "next/image";

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
            <section className="grid w-full max-w-7xl mx-auto  gap-4 grid-cols-4 grid-rows-3">
                <div className="bg-clrprimary px-4 py-8 gap-8 items-center flex flex-col">
                    <div className="flex flex-col items-center">
                        <Image src="./t-preview.png" alt="t-preview-img" />
                        <p className="font-black italic text-xl">
                            CTF graphic t-shirt
                        </p>
                    </div>
                    <p className="py-4 px-8 bg-clrdark w-fit font-extrabold">
                        LEGG TIL
                    </p>
                </div>
            </section>
        </main>
    );
}
