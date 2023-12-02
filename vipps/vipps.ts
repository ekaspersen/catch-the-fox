import Vipps from "@vippsno/vipps-sdk";

export const vipps = new Vipps({
  pluginName: "My plugin name",
  pluginVersion: "0.1.0",
  clientId: process.env.VIPPS_CLIENT_ID!,
  clientSecret: process.env.VIPPS_CLIENT_SECRET!,
  subscriptionKey: process.env.VIPPS_SUBSCRIPTION_KEY_SECONDARY!,
  merchantSerialNumber: process.env.VIPPS_MERCHANT_SERIAL_NUMBER!,
  useTestMode: true,
});
