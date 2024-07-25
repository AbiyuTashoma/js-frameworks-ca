import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useApi = create(persist((set) => ({
  products: [],
  isLoading: false,
  isError: false,
  updateProducts: (items) => set({products: [...items]}),
  updateIsLoading: (bool) => set({isLoading: bool}),
  updateIsError: (bool) => set({isError: bool}),
}), {
  name: "apiData",
}));

export default useApi;