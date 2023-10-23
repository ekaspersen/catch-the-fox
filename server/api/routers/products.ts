import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";

export const productsRouter = createTRPCRouter({
    getFirstProducts: publicProcedure.query(async () => {
        const products = await db.products.findMany({
            take: 3,
        });
        return products;
    }),
});
