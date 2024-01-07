import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";
import { Client } from "vipps_mobilepay_sdk";
import { z } from "zod";

const clientId = process.env.VIPPS_CLIENT_ID!;
const clientSecret = process.env.VIPPS_CLIENT_SECRET!;

export const vipps = Client({
  merchantSerialNumber: process.env.VIPPS_MERCHANT_SERIAL_NUMBER!,
  subscriptionKey: process.env.VIPPS_SUBSCRIPTION_KEY_SECONDARY!,
  useTestMode: true,
  retryRequests: false,
  systemName: "My cool e-commerce system",
  systemVersion: "0.0.1",
  pluginVersion: "0.0.1",
  pluginName: "My cool plugin",
});

const token = await vipps.auth.getToken({
  clientId,
  clientSecret,
  subscriptionKey: process.env.VIPPS_SUBSCRIPTION_KEY_SECONDARY!,
});

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
