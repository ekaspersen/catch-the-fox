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
      </section>
    </main>
  );
}
