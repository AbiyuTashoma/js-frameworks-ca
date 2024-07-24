import useApi from "../store/apiStore";
import { shallow } from "zustand/shallow";

export const object = [
  {
    id: "109566af-c5c2-4f87-86cb-76f36fb8d378",
    title: "Vanilla Perfume",
    description:
      "Women's perfume that smells a warm and sweet, with nuances of wood and jasmine.",
    price: 2599.99,
    discountedPrice: 2079.99,
    image: {
      url: "https://static.noroff.dev/api/online-shop/1-perfume-white.jpg",
      alt: "",
    },
    rating: 5,
    tags: ["perfume", "beauty"],
    reviews: [
      {
        id: "90a61e3e-355a-42e4-b038-d91dcad33c20",
        username: "Jim N.",
        rating: 5,
        description: "My partner loves it, its her favourite.",
      },
    ],
  },
  {
    id: "10d6cc02-b282-46bb-b35c-dbc4bb5d91d9",
    title: "Toy car",
    description:
      "A die-cast model of a toy car, perfect for displaying on your shelf.",
    price: 499.95,
    discountedPrice: 449.95,
    image: {
      url: "https://static.noroff.dev/api/online-shop/12-toy-car.jpg",
      alt: "",
    },
    rating: 0,
    tags: ["toy"],
    reviews: [],
  },
];

function Search() {
  const { products, updateProducts } = useApi(
    (state) => ({
      products: state.products,
      updateProducts: state.updateProducts,
    }),
    shallow
  );

  function handleOnChange (txt) {
    console.log(txt);
    const newProducts = products.filter((item) => item['title'].includes(txt));
    updateProducts(newProducts);
  }

  return (
      <form className="input-group search-form">
          <label className="input-group-text" htmlFor="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </label>
          <input type="search" onChange={(event) => handleOnChange(event.target.value)} className="form-control" id="search" placeholder="search here"/>
        </form>
  );
}

export default Search;