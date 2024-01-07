import { Client, CheckoutInitiateSessionRequest } from "vipps_mobilepay_sdk";

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

const accessToken = await vipps.auth.getToken({
  clientId: process.env.VIPPS_CLIENT_ID!,
  clientSecret: process.env.VIPPS_CLIENT_SECRET!,
  subscriptionKey: process.env.VIPPS_SUBSCRIPTION_KEY_SECONDARY!,
});
