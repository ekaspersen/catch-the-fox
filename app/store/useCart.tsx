import { create } from "zustand";

type Product = {
    stock: number;
    size: string;
    name: string;
    imgUrl: string;
    price: number;
    currency: string;
    id: number;
}
export type CartState = {
  count: number;
  cart: Product[];
  addToCart: (object: Product) => void;
  removeAllCart: () => void;
};

const useCart = create<CartState>((set) => ({
  count: 0,
  cart: [],
  addToCart: (object) => set((state) => ({ count: state.count + 1, cart: [...state.cart, object] })),
  removeAllCart: () => set({ count: 0 }),
}));

export default useCart;