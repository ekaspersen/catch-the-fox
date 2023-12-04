import { create } from "zustand";

// Define a type for the items in the cart
type CartItem = {
  sizeStockId: number;
  quantity: number;
};

// Define the shape of your store's state
export type CartState = {
  cart: Record<number, CartItem>;
  selectedSizeStockId: number | null;
  setSelectedSizeStockId: (sizeStockId: number) => void;
  addToCart: (sizeStockId: number) => void;
  removeFromCart: (sizeStockId: number) => void;
  incrementQuantity: (sizeStockId: number) => void;
  decrementQuantity: (sizeStockId: number) => void;
  clearCart: () => void;
};

// Create the store
const useCart = create<CartState>((set) => ({
  cart: {},
  selectedSizeStockId: null,
  setSelectedSizeStockId: (sizeStockId) =>
    set(() => ({ selectedSizeStockId: sizeStockId })),
  addToCart: (sizeStockId) =>
    set((state) => {
      const quantity = state.cart[sizeStockId]?.quantity ?? 0;
      return {
        ...state,
        cart: {
          ...state.cart,
          [sizeStockId]: { sizeStockId, quantity: quantity + 1 },
        },
      };
    }),
  removeFromCart: (sizeStockId) =>
    set((state) => {
      const newCart = { ...state.cart };
      delete newCart[sizeStockId];
      return { cart: newCart };
    }),
  incrementQuantity: (sizeStockId) =>
    set((state) => {
      const item = state.cart[sizeStockId];
      if (item) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [sizeStockId]: { ...item, quantity: item.quantity + 1 },
          },
        };
      }
      return state;
    }),
  decrementQuantity: (sizeStockId) =>
    set((state) => {
      const item = state.cart[sizeStockId];
      if (item && item.quantity > 1) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [sizeStockId]: { ...item, quantity: item.quantity - 1 },
          },
        };
      } else if (item && item.quantity === 1) {
        const newCart = { ...state.cart };
        delete newCart[sizeStockId];
        return { cart: newCart };
      }
      return state;
    }),
  clearCart: () => set({ cart: {} }),
}));

export default useCart;
