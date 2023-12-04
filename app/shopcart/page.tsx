import Image from "next/image";

export default function ShopCart() {
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
        <button className="flex w-fit items-center gap-16 rounded-full bg-clrdark px-12 py-6">
          <span className="text-2xl font-extrabold">Go to Checkout</span>
        </button>
      </div>
    </main>
  );
}
