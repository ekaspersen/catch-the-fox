"use client";

import { api } from "@/trpc/react";
import Image from "next/image";
import Link from "next/link";
import useCart from "@/app/store/useCart";

export default function Page({ params }: { params: { id: number } }) {
  const { data: product, isLoading } = api.products.getSpecificProduct.useQuery(
    {
      id: Number(params.id),
    },
  );

  const { addToCart, selectedSizeStockId, setSelectedSizeStockId } = useCart(
    (state) => ({
      addToCart: state.addToCart,
      selectedSizeStockId: state.selectedSizeStockId,
      setSelectedSizeStockId: state.setSelectedSizeStockId,
    }),
  );

  const handleSizeChange = (e: any) => {
    setSelectedSizeStockId(Number(e.target.value));
  };

  const handleAddToCart = () => {
    if (selectedSizeStockId) {
      addToCart(selectedSizeStockId);
    } else {
      console.log("Please select a size.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Replace with your loading component
  }

  return (
    <>
      <section className="mx-auto flex max-w-7xl flex-col gap-20 p-4">
        <div className="flex cursor-default gap-2 text-xs font-semibold italic text-clrtertiary ">
          <Link href="/shop">
            <span className="underline underline-offset-4">Shop</span>
          </Link>
          <span>/</span>
          {product?.name}
        </div>
        <div className="flex w-full flex-col md:flex-row">
          <div className="grid flex-1 place-items-center pb-8">
            {product?.image_url && (
              <Image
                className="object-contain"
                src={product.image_url}
                alt={product?.name}
                width={400}
                height={450}
              />
            )}
          </div>
          <div className="flex flex-1 flex-col gap-12">
            <div>
              <span>T-shirt</span>
              <h1 className="text-3xl font-black lg:text-5xl">
                {product?.name}
              </h1>
            </div>
            <p className="font-medium">
              {product?.description ||
                "Discover your inner rockstar with our Catch The Fox Limited Edition T-Shirt! Made with 100% premium cotton for ultimate comfort, this tee is a must-have for any true fan. Get yours now and keep the music alive!"}
            </p>
            <div className="flex flex-col">
              <select
                onChange={handleSizeChange}
                className="w-44 appearance-none border-0 bg-clrwhite p-2 font-medium text-clrdark focus:outline-0"
              >
                <option className="hidden" value="">
                  Choose Size
                </option>
                {product?.sizesStock?.map((sizeStock) => (
                  <option key={sizeStock.id} value={sizeStock.id}>
                    {sizeStock.sizes.name}
                  </option>
                ))}
              </select>
              <span className="pt-1 font-extrabold text-clrwhite opacity-50">
                Pick a size to add to cart
              </span>
            </div>
            <span className="relative z-10 text-4xl font-black italic text-clrprimary lg:text-5xl">
              {product?.price?.toString()},-
              <span className="absolute left-[-3px] top-[-3px] z-0 text-4xl font-black italic text-clrtertiary lg:text-5xl">
                {product?.price?.toString()},-
              </span>
            </span>
            <button
              onClick={handleAddToCart}
              className="bg-clrprimary p-4 font-extrabold text-clrdark"
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
      <section className="bg-clrprimarydark w-full">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 p-16">
          <h2 className="text-4xl text-clrtertiary">More Stuff</h2>
          {/* Render more products here */}
        </div>
      </section>
    </>
  );
}
