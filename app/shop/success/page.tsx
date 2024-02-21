import Link from "next/link";

export default function Success() {
  return (
    <main>
      <div className="flex w-full flex-col items-center gap-2 py-16">
        <h1 className="text-5xl font-black text-clrprimary">SUCCESS</h1>
        <span className="text-2xl font-black">CATCH THE FOX</span>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 bg-clrprimary px-8 py-4">
        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-col items-center justify-center gap-16 py-16">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black italic">
                Thank you for the support!
              </span>
              <span className="italic">
                Håper du har en strålende dag videre.
              </span>
            </div>
            Kvittering
            <div className="flex w-full justify-center gap-8">
              <Link
                href="/"
                className="flex w-fit items-center gap-16 rounded-full bg-clrdark px-12 py-6 text-2xl font-extrabold hover:bg-clrwhite hover:text-clrdark"
              >
                HOME
              </Link>
              <Link
                href="/shop"
                className="flex w-fit items-center gap-16 rounded-full bg-clrdark px-12 py-6 text-2xl font-extrabold hover:bg-clrwhite hover:text-clrdark"
              >
                SHOP
              </Link>
              <Link
                href="/shopcart"
                className="flex w-fit items-center gap-16 rounded-full bg-clrdark px-12 py-6 text-2xl font-extrabold hover:bg-clrwhite hover:text-clrdark"
              >
                CART
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
