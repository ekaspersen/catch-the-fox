import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";
import { z } from "zod";

export const productsRouter = createTRPCRouter({
  getFirstProducts: publicProcedure.query(async () => {
    const products = await db.products.findMany({
      take: 3,
    });
    return products;
  }),
  getSpesificProduct: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const product = await db.products.findUnique({
        where: { id: input.id },
        include: {
          categories: true,
          sizesStock: {
            include: {
              sizes: true,
            },
          },
        },
      });

      // Fetch associated categories
      const categories = await db.categories.findMany({
        where: { products: { some: { id: product?.id } } },
      });

      // Fetch associated sizes
      const sizes = [];
      for (const sizeStock of product?.sizesStock) {
        const size = await db.sizes.findUnique({
          where: { id: sizeStock.size_id },
        });
        sizes.push(size);
      }

      // Combine product data with associated categories and sizes
      const enrichedProduct = {
        ...product,
        categories,
        sizes,
      };

      return enrichedProduct;
    }),
});
