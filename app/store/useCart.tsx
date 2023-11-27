import { create } from "zustand";

const useCart = create((set) => ({
  count: 0,
  addToCart: () => set((state) => ({ count: state.count + 1 })),
  removeAllCart: () => set({ count: 0 }),
}));

export default useCart;
