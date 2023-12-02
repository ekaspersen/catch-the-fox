import { create } from "zustand";

export type CartState = {
  count: number;
  addToCart: () => void;
  removeAllCart: () => void;
};


const useCart = create<CartState>((set) => ({
  count: 0,
  addToCart: () => set((state) => ({ count: state.count + 1 })),
  removeAllCart: () => set({ count: 0 }),
}));

export default useCart;
