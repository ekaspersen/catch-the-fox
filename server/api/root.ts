import { createTRPCRouter } from "@/server/api/trpc";
import { productsRouter } from "./routers/products";
import { vippsRouter } from "./routers/vipps";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 * 
 * / You can then access the merged route with
//  http://localhost:3000/trpc/<NAMESPACE>.<PROCEDURE>
 */

export const appRouter = createTRPCRouter({
  products: productsRouter,
  vipps: vippsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
