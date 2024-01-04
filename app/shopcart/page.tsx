import Image from "next/image";
import { api } from "@/trpc/server";
import VippsCheckoutElement from "./_components/VippsCheckout";
import VippsCheckoutButton from "./_components/VippsCheckOutButton";

export default async function ShopCart() {
  return (
    <main>
      <div className="flex w-full flex-col items-center gap-2 py-16">
        <h1 className="text-5xl font-black text-clrprimary">YOUR CART</h1>
        <span className="text-2xl font-black">CATCH THE FOX</span>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-end gap-8 bg-clrprimary px-8 py-4">
        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center justify-between bg-clrdark px-8 py-4">
            <div className="flex items-center gap-4">
              <Image
                className="h-24 w-24 object-contain"
                src="/white-t-fox.png"
                alt="graphic Catch the fox t-shirt"
                width={96}
                height={96}
              />
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-black">Product Name</span>
                <span className="text-xs">350kr</span>
              </div>
            </div>
            <div className="flex justify-center gap-8">
              <div className="flex flex-col">
                <span>Size</span>
                <button>dropdown</button>
              </div>
              <div className="flex flex-col">
                <span>Amount</span>
                <div className="flex gap-1">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-2xl font-black">Total Price:</span>
          <span className="text-3xl font-black italic">300kr</span>
        </div>
        <button
          onClick={async () => {
            try {
              const data = await api.vipps.vippsCreateSession.query({
                price: 200,
              });
              const checkout = new VippsCheckoutDirect({
                checkoutFrontendUrl: data?.checkoutFrontendUrl,
                language: "no",
                token: data?.token,
              });
            } catch (e) {
              console.log("error here ", e);
            }
          }}
        >
          <VippsCheckoutButton />
        </button>

        {/* <button className="flex w-fit items-center gap-16 rounded-full bg-clrdark px-12 py-6">
          <span className="text-2xl font-extrabold">Go to Checkout</span>
          <svg
            width="38"
            height="25"
            viewBox="0 0 38 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.669922 12.5C0.669922 12.1464 0.810378 11.8073 1.06039 11.5573C1.3104 11.3073 1.6495 11.1669 2.00307 11.1669H33.4467L25.0558 2.7787C24.8055 2.52837 24.6649 2.18885 24.6649 1.83483C24.6649 1.48081 24.8055 1.14129 25.0558 0.890962C25.3062 0.640633 25.6457 0.5 25.9997 0.5C26.3537 0.5 26.6932 0.640633 26.9436 0.890962L37.6087 11.5561C37.7329 11.68 37.8314 11.8271 37.8986 11.989C37.9658 12.151 38.0004 12.3246 38.0004 12.5C38.0004 12.6754 37.9658 12.849 37.8986 13.011C37.8314 13.1729 37.7329 13.32 37.6087 13.4439L26.9436 24.109C26.6932 24.3594 26.3537 24.5 25.9997 24.5C25.6457 24.5 25.3062 24.3594 25.0558 24.109C24.8055 23.8587 24.6649 23.5192 24.6649 23.1652C24.6649 22.8112 24.8055 22.4716 25.0558 22.2213L33.4467 13.8331H2.00307C1.6495 13.8331 1.3104 13.6927 1.06039 13.4427C0.810378 13.1927 0.669922 12.8536 0.669922 12.5Z"
              fill="#FAFAFA"
            />
          </svg>
        </button> */}
      </div>
    </main>
  );
}
