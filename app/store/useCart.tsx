import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the Product type with id as either number or BigInt based on your requirement.
type Product = {
  stock: number;
  size: string;
  name: string;
  imgUrl: string;
  price: number;
  currency: string;
  id: number; // Change this to BigInt if needed
};

export type AggregatedProduct = Product & { count: number };

// Single definition of the aggregateCartItems function
const aggregateCartItems = (cartItems: Product[]): AggregatedProduct[] => {
  const aggregationMap = new Map<string, AggregatedProduct>();

  cartItems.forEach((item) => {
    const key = `${item.id}-${item.size}`;
    const existing = aggregationMap.get(key);

    if (existing) {
      existing.count += 1;
    } else {
      aggregationMap.set(key, { ...item, count: 1 });
    }
  });

  return Array.from(aggregationMap.values());
};

export type CartState = {
  count: number;
  cart: Product[];
  aggregatedCart: AggregatedProduct[];
  addToCart: (object: Product) => void;
  decreaseQuantity: (id: number, size: string) => void;
  removeFromCart: (id: number, size: string) => void;
  removeAllCart: () => void;
  getAggregatedCart: () => void;
};

const useCart = create(
  persist<CartState>(
    (set) => ({
      cart: [],
      count: 0,
      addToCart: (object) =>
        set((state) => {
          const newCart = [...state.cart, object];
          const newAggregatedCart = aggregateCartItems(newCart);
          return {
            count: state.count + 1,
            cart: newCart,
            aggregatedCart: newAggregatedCart,
          };
        }),
      decreaseQuantity: (id: number, size: string) =>
        set((state) => {
          let found = false;
          const newCart = state.cart.reduce((acc: Product[], item) => {
            if (item.id === id && item.size === size && !found) {
              found = true;
              return acc;
            }
            return [...acc, item];
          }, [] as Product[]);

          const newAggregatedCart = aggregateCartItems(newCart);

          return { ...state, cart: newCart, aggregatedCart: newAggregatedCart };
        }),
      removeFromCart: (id: number, size: string) =>
        set((state) => {
          const newCart = state.cart.filter(
            (item) => !(item.id === id && item.size === size),
          );
          return { ...state, cart: newCart, count: state.count - 1 };
        }),
      removeAllCart: () =>
        set((state) => {
          return { ...state, cart: [], count: 0 };
        }),
      aggregatedCart: [],
      getAggregatedCart: () => {
        set((state) => ({
          aggregatedCart: aggregateCartItems(state.cart),
        }));
      },
    }),
    {
      name: "cart-storage", // unique name for the persisted state
    },
  ),
);

export default useCart;
