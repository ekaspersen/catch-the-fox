import Image from "next/image";
import { supabase } from "@/utils/supabase";
import { PostgrestError } from "@supabase/supabase-js";
import { api } from "@/trpc/server";

export default async function ProductCard() {
    // server api query example below
    const products = await api.products.getFirstProducts.query();

    return (
        <>
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-clrprimary px-4 py-8 gap-8 items-center flex flex-col"
                >
                    <div className="flex flex-col items-center">
                        <Image
                            className="object-contain max-h-80"
                            src={product?.image_url as string}
                            alt="graphic Catch the fox t-shirt"
                            width={400}
                            height={450}
                        />
                        <p className="pt-2 italic text-xl md:text-2xl">
                            {product?.name}
                        </p>
                        <p className="font-semibold italic">
                            {Number(product?.price)}kr
                        </p>
                    </div>
                    <button className="py-4 px-8 mt-auto bg-clrdark w-fit font-extrabold">
                        MORE
                    </button>
                </div>
            ))}
        </>
    );
}
