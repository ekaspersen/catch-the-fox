import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";
import { vipps } from "@/vipps/vipps";
import { z } from "zod";

const clientId = process.env.VIPPS_CLIENT_ID!;
const clientSecret = process.env.VIPPS_CLIENT_SECRET!;

// Just want to make this so i can archive vipps on this branch

// TODO: Add error handling
// TODO: Add DB Change on success

export const vippsRouter = createTRPCRouter({
  vippsCreateSession: publicProcedure
    .input(
      z.object({
        price: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      const checkout = await vipps.checkout.create(clientId, clientSecret, {
        merchantInfo: {
          callbackUrl: "https://example.com/callbackUrl",
          returnUrl: "http://localhost:3000/shop/success",
        },
        transaction: {
          amount: {
            currency: "NOK",
            value: input.price * 100, // This value equals NOK 10,-
          },
          paymentDescription: "Catch the fox merch",
        },
      });

      if (!checkout.ok) {
        console.error("😟 Error creating checkout session 😟");
        console.log(checkout.message);

        throw new Error();
      }
      console.log("session created! 🚀", checkout.data);
      return checkout.data;
    }),
});
