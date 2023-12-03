import { create } from "zustand";

export type CartState = {
  count: number;
  cart: object;
  selectedSize: number; // Introduced state variable to track selected size
  addToCart: (selectedSize: number) => void;
  removeAllCart: () => void;
};

const useCart = create<CartState>((set) => ({
  count: 0,
  cart: {},
  selectedSize: 0, // Initialize selectedSize as null
  addToCart: (selectedSize) =>
    set((state) => ({
      count: state.count + 1,
      selectedSize: selectedSize, // Update selectedSize with chosen size
    })),
  removeAllCart: () => set({ count: 0, selectedSize: 0 }), // Reset selectedSize when cart is emptied
}));

export default useCart;
