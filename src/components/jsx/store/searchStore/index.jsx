import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSearch = create(persist((set) => ({
  searchProducts: [],
  updateSearchProducts: (items) => set({searchProducts: [...items]}),
}), {
  name: "searchData",
}));

export default useSearch;