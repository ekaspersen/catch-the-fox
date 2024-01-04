import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";
import { vipps } from "@/vipps/vipps";
import { z } from "zod";

export const vippsRouter = createTRPCRouter({
  vippsCreateSession: publicProcedure.input(z.object({
    price: z.number()
  })).query(async ({input}) => {
    const session = await vipps.checkout.createSession({
      merchantInfo: {
        callbackUrl: "https://matsfjeldstad.no/vipps/payment-callback",
        returnUrl: "https://matsfjeldstad.no/vipps",
        callbackAuthorizationToken:
          "iOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImllX3FXQ1hoWHh0MXpJ",
      },
      transaction: {
        amount: {
          currency: "NOK",
          value: input.price * 100,
        },
        paymentDescription: "test",
        reference: "order-id-123",
      },
    });

    if (!session.checkoutFrontendUrl) {
      throw new Error();
    }
    return session;
  }),
  getSession: publicProcedure.input(z.string()).query(async ({input}) => {
    const checkout = await vipps.checkout.getSessionDetails(input)
    if(!checkout.sessionId){
      throw new Error()
    }
    
    return checkout
  })
});
