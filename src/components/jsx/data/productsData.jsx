import GetApi from "../api/getApi";
import Loading from "./loading";
import Error from "./error";
import ProductsList from "./productsList";
import { url } from "./js/constants";
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

function ProductsData() {

  const { products, isLoading, isError, updateProducts } = useApi(
    (state) => ({
      products: state.products,
      isLoading: state.isLoading,
      isError: state.isError,
      updateProducts: state.updateProducts,
    }),
    shallow
  );

  GetApi(url);

  if (isLoading || !products) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  console.log(products);
  return (
    <div>
      <button onClick={() => updateProducts(object)}>Change list</button>
      {ProductsList(products)}
    </div>);
}

export default ProductsData;