"use client";

import { api } from "@/trpc/react";
import Image from "next/image";
import Link from "next/link";
import useCart from "@/app/store/useCart";
import { useState } from "react";
import SizeDropdown from "./components/SizeDropdown";

export default function Page({ params }: { params: { id: number } }) {
  const { data: product } = api.products.getSpecificProduct.useQuery({
    id: Number(params.id),
  });
  const addToCart = useCart((state) => state.addToCart);
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };
  const { data: products } = api.products.getFirstProducts.useQuery();
  return (
    <>
      <section className="mx-auto flex max-w-7xl flex-col gap-20 p-4">
        <div className="flex cursor-default gap-2 text-xs font-semibold italic text-clrtertiary ">
          <Link className="underline underline-offset-4" href="/shop">
            Shop
          </Link>
          <span>/</span>
          {product?.name}
        </div>
        <div className="flex w-full flex-col md:flex-row">
          <div className="grid flex-1 place-items-center pb-8">
            <Image
              className="object-contain"
              src={product?.image_url as string}
              alt="graphic Catch the fox t-shirt"
              width={400}
              height={450}
            />
          </div>
          <div className="flex flex-1 flex-col gap-12">
            <div>
              <span>T-shirt</span>
              <h1 className="text-3xl font-black lg:text-5xl">
                {product?.name}
              </h1>
            </div>
            <p className="font-medium">
              Discover your inner rockstar with our Catch The Fox Limited
              Edition T-Shirt! Made with 100% premium cotton for ultimate
              comfort, this tee is a must-have for any true fan. Get yours now
              and keep the music alive!
            </p>
            <div className="flex flex-col">
              <SizeDropdown
                sizes={
                  product?.sizesStock.map((s) => ({
                    id: s.id,
                    name: s.sizes.name,
                  })) || []
                }
                onSelectSize={handleSizeSelect}
              />
              <span
                id="plzPickSize"
                className="pt-1 font-extrabold text-clrwhite opacity-50"
              >
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
              onClick={() => {
                if (selectedSize) {
                  addToCart({
                    size: selectedSize,
                    name: product?.name!,
                    imgUrl: product?.image_url!,
                    price: Number(product?.price!),
                    currency: "nok",
                    id: Number(product?.id!),
                    stock: 22,
                  });
                } else {
                  const warningElement = document.getElementById("plzPickSize");
                  // Add new class names to the element
                  if (warningElement) {
                    warningElement.classList.add(
                      "text-xl",
                      "opacity-100",
                      "animate-pulse",
                    );
                  }
                }
              }}
              className="bg-clrprimary p-4 font-extrabold text-clrdark"
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-clrprimarydark">
        <div
          className="mx-auto flex max-w-7xl flex-col gap-8 p-8 py-16 md:p-16 md:py-32
        "
        >
          <h2 className="relative z-10 text-4xl font-black italic text-clrprimary lg:text-5xl">
            MORE STUFF
            <span className="absolute left-[-3px] top-[-3px] z-0 text-4xl font-black italic text-clrtertiary lg:text-5xl">
              MORE STUFF
            </span>
          </h2>
          <section className="mx-auto grid w-full max-w-7xl grid-cols-1 grid-rows-2 gap-4   md:grid-cols-2 md:grid-rows-1">
            {products
              ?.filter((otherProduct) => otherProduct.id !== BigInt(params.id))
              .map((otherProduct) => (
                <div
                  key={otherProduct.id}
                  className="flex flex-col items-center gap-8 bg-clrprimary px-4 py-8"
                >
                  <div className="flex flex-col items-center">
                    <Image
                      className="max-h-80 object-contain"
                      src={otherProduct?.image_url as string}
                      alt="graphic Catch the fox t-shirt"
                      width={400}
                      height={450}
                    />
                    <p className="pt-2 text-xl italic md:text-2xl">
                      {otherProduct?.name}
                    </p>
                    <p className="font-semibold italic">
                      {Number(product?.price)}kr
                    </p>
                  </div>
                  <Link href={"/shop/" + otherProduct.id}>
                    <button className="mt-auto w-fit bg-clrdark px-8 py-4 font-extrabold hover:bg-clrwhite hover:text-clrdark">
                      MORE
                    </button>
                  </Link>
                </div>
              ))}
          </section>
        </div>
      </section>
    </>
  );
}
