"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import useCart from "../store/useCart";
import Link from "next/link";

export default function ShopCart() {
  const {
    cart,
    getAggregatedCart,
    aggregatedCart,
    decreaseQuantity,
    addToCart,
    removeFromCart,
  } = useCart((state) => ({
    cart: state.cart,
    getAggregatedCart: state.getAggregatedCart,
    aggregatedCart: state.aggregatedCart,
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
    decreaseQuantity: state.decreaseQuantity,
  }));

  useEffect(() => {
    getAggregatedCart();
  }, [cart, getAggregatedCart]);

  const calculateTotal = () => {
    return aggregatedCart.reduce((total, product) => {
      return total + product.count * product.price;
    }, 0);
  };

  return (
    <main>
      <div className="flex w-full flex-col items-center gap-2 py-16">
        <h1 className="text-5xl font-black text-clrprimary">YOUR CART</h1>
        <span className="text-2xl font-black">CATCH THE FOX</span>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-end gap-8 bg-clrprimary px-8 py-4">
        <div className="flex w-full flex-col gap-2">
          {aggregatedCart.length === 0 ? (
            <div className="flex h-96 flex-col items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black italic">
                  Cart is empty
                </span>
                <span className="italic">
                  please go buy something before you return
                </span>
              </div>

              <Link
                href="/shop"
                className="flex w-fit items-center gap-16 rounded-full bg-clrdark px-12 py-6 text-2xl font-extrabold hover:bg-clrwhite hover:text-clrdark"
              >
                Go to shop
              </Link>
            </div>
          ) : (
            aggregatedCart.map((product) => (
              <div
                key={`${product.id}-${product.size}`}
                className="flex items-center justify-between bg-clrdark px-8 py-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    className="h-24 w-24 object-contain"
                    src={product.imgUrl}
                    alt={`graphic Catch the fox t-shirt ${product.size}`}
                    width={96}
                    height={96}
                  />
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl font-black">{product.name}</span>
                    <div className="flex gap-2 text-sm font-bold italic">
                      <span>Size:</span>
                      <span>{product.size}</span>
                    </div>
                    <span className="text-sm font-bold italic">
                      {product.price}kr
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-8">
                  <button
                    className=" text-xs font-black text-clrprimary"
                    onClick={() => removeFromCart(product.id, product.size)}
                  >
                    Remove
                  </button>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4 text-xl font-black">
                      <button
                        onClick={() =>
                          decreaseQuantity(product.id, product.size)
                        }
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_540_69)">
                            <path
                              d="M100 50C100 63.2608 94.7322 75.9785 85.3553 85.3553C75.9785 94.7322 63.2608 100 50 100C36.7392 100 24.0215 94.7322 14.6447 85.3553C5.26784 75.9785 0 63.2608 0 50C0 36.7392 5.26784 24.0215 14.6447 14.6447C24.0215 5.26784 36.7392 0 50 0C63.2608 0 75.9785 5.26784 85.3553 14.6447C94.7322 24.0215 100 36.7392 100 50ZM28.125 46.875C27.2962 46.875 26.5013 47.2042 25.9153 47.7903C25.3292 48.3763 25 49.1712 25 50C25 50.8288 25.3292 51.6237 25.9153 52.2097C26.5013 52.7958 27.2962 53.125 28.125 53.125H71.875C72.7038 53.125 73.4987 52.7958 74.0847 52.2097C74.6708 51.6237 75 50.8288 75 50C75 49.1712 74.6708 48.3763 74.0847 47.7903C73.4987 47.2042 72.7038 46.875 71.875 46.875H28.125Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_540_69">
                              <rect width="100" height="100" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                      <span>{product.count}</span>
                      <button onClick={() => addToCart({ ...product })}>
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_540_67)">
                            <path
                              d="M100 50C100 63.2608 94.7322 75.9785 85.3553 85.3553C75.9785 94.7322 63.2608 100 50 100C36.7392 100 24.0215 94.7322 14.6447 85.3553C5.26784 75.9785 0 63.2608 0 50C0 36.7392 5.26784 24.0215 14.6447 14.6447C24.0215 5.26784 36.7392 0 50 0C63.2608 0 75.9785 5.26784 85.3553 14.6447C94.7322 24.0215 100 36.7392 100 50ZM53.125 28.125C53.125 27.2962 52.7958 26.5013 52.2097 25.9153C51.6237 25.3292 50.8288 25 50 25C49.1712 25 48.3763 25.3292 47.7903 25.9153C47.2042 26.5013 46.875 27.2962 46.875 28.125V46.875H28.125C27.2962 46.875 26.5013 47.2042 25.9153 47.7903C25.3292 48.3763 25 49.1712 25 50C25 50.8288 25.3292 51.6237 25.9153 52.2097C26.5013 52.7958 27.2962 53.125 28.125 53.125H46.875V71.875C46.875 72.7038 47.2042 73.4987 47.7903 74.0847C48.3763 74.6708 49.1712 75 50 75C50.8288 75 51.6237 74.6708 52.2097 74.0847C52.7958 73.4987 53.125 72.7038 53.125 71.875V53.125H71.875C72.7038 53.125 73.4987 52.7958 74.0847 52.2097C74.6708 51.6237 75 50.8288 75 50C75 49.1712 74.6708 48.3763 74.0847 47.7903C73.4987 47.2042 72.7038 46.875 71.875 46.875H53.125V28.125Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_540_67">
                              <rect width="100" height="100" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {aggregatedCart.length === 0 ? (
          <></>
        ) : (
          <>
            <div className="flex flex-col items-end gap-2">
              <span className="text-2xl font-black">Total Price:</span>
              {/* Calculation for total price needs to be implemented */}
              <span className="text-3xl font-black italic">
                {calculateTotal()}kr
              </span>
            </div>
            <button className="flex w-fit items-center gap-16 rounded-full bg-clrdark px-12 py-6 hover:bg-clrwhite hover:text-clrdark">
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
            </button>
          </>
        )}
      </div>
    </main>
  );
}
