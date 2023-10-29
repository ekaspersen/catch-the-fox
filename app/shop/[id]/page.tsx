"use client";

import { api } from "@/trpc/react";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { id: number } }) {
  const { data: product } = api.products.getSpesificProduct.useQuery({
    id: Number(params.id),
  });
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
              <button className="flex w-max items-center gap-10 bg-clrwhite p-2 text-clrdark">
                <span className="font-medium">Choose size</span>
                <Image
                  className="max-w-[80%]"
                  src="/chevron-down.svg"
                  alt="graphic ctf"
                  width={24}
                  height={24}
                />
              </button>
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
            <button className="bg-clrprimary p-4 font-extrabold text-clrdark">
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
