import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";
import { z } from "zod";

export const productsRouter = createTRPCRouter({
  // Endpoint to get the first few products
  getFirstProducts: publicProcedure.query(async () => {
    const products = await db.products.findMany({
      take: 3,
      include: {
        categories: true,
        sizesStock: {
          include: {
            sizes: true,
          },
        },
      },
    });
    return products;
  }),

  // Endpoint to get a specific product with categories and sizes
  getSpecificProduct: publicProcedure
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
      return product;
    }),

  // Add more endpoints as needed, for example:
  // - Get products by category
  // - Get all sizes
  // - Get stock information for different sizes
});
