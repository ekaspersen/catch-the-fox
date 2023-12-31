import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";
import { vipps } from "@/vipps/vipps";
import { z } from "zod";

const clientId = process.env.VIPPS_CLIENT_ID!;
const clientSecret = process.env.VIPPS_CLIENT_SECRET!;

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
          returnUrl:
            "https://example.com/page-customer-returns-to-after-success-or-failure-or-cancel",
          
        },
        transaction: {
          amount: {
            currency: "NOK",
            value: input.price * 100, // This value equals NOK 10,-
          },
          paymentDescription: "One pair of socks.",
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
