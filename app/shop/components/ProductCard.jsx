import { supabase } from "@/utils/supabase";

export async function getStaticProps() {
    const { data: products, error } = await supabase
        .from("products")
        .select("*");
    console.log(products);
    if (error) {
        throw new Error(error);
    }
    return {
        props: {
            products: [],
        },
    };
}
export default function ProductCard({ products }) {
    return (
        <div>
            <h1>Hello chat! </h1>
            <pre>{JSON.stringify(products, null, 2)}</pre>
        </div>
    );
}
