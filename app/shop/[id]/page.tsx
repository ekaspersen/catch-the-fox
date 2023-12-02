"use client";

import { api } from "@/trpc/react";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { id: number } }) {
  const { data: product, isFetched } = api.products.getSpesificProduct.useQuery(
    {
      id: Number(params.id),
    },
  );

  if (isFetched) {
    console.log(product?.sizesStock);
  }

  
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
        <div className="flex w-full">
          <div className="flex-1">
            <Image
              className="max-h-80 object-contain"
              src={product?.image_url as string}
              alt="graphic Catch the fox t-shirt"
              width={400}
              height={450}
            />
          </div>
          <div className="flex flex-1 flex-col gap-12">
            <div>
              <span>T-shirt</span>
              <h1>{product?.name}</h1>
            </div>
            <p>
              Unleash your inner rockstar with our Catch The Fox Limited Edition
              T-Shirt! Made with 100% premium cotton for ultimate comfort, this
              tee is a must-have for any true fan. Get yours now and keep the
              music alive!
            </p>
            <div className="flex flex-col">
              <button>Choose size</button>
              {product?.sizesStock.map(size => (
                <div key={size.sizes.id}>{size.sizes.name} = stock: {Number(size.amount)}</div>
              ))}
              <span>Pick a size to add to cart</span>
            </div>
            <div>300kr</div>
            <button>add to cart</button>
          </div>
        </div>
      </section>
    </>
  );
}
