import Image from "next/image";
import { api } from "@/trpc/server";
import Link from "next/link";

export default async function ProductCard() {
  // server api query example below
  const products = await api.products.getFirstProducts.query();

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center gap-8 bg-clrprimary px-4 py-8"
        >
          <div className="flex flex-col items-center">
            <Image
              className="max-h-80 object-contain"
              src={product?.image_url as string}
              alt="graphic Catch the fox t-shirt"
              width={400}
              height={450}
            />
            <p className="pt-2 text-xl italic md:text-2xl">{product?.name}</p>
            <p className="font-semibold italic">{Number(product?.price)}kr</p>
          </div>
          <Link href={"/shop/" + product.id}>
            <button className="mt-auto w-fit bg-clrdark px-8 py-4 font-extrabold hover:bg-clrwhite hover:text-clrdark">
              MORE
            </button>
          </Link>
        </div>
      ))}
    </>
  );
}
