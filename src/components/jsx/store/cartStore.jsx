import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import addToCart from './js/addProduct';
import removeFromCart from './js/removeProduct';

const useStore = create(persist((set) => ({
  cart: [],
  total: 0,
  sum: 0,
  addProduct: (item) => set((state) => (addToCart(state.cart, item))),
  removeProduct: (item) => set((state) => (removeFromCart(state.cart, item))),
  clearCart: () => set({ cart: [], total: 0, sum:0 }),
}), {
  name: "cart",
}));

export default useStore;