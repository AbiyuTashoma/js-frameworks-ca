import GetApi from "../api/getApi";
import Loading from "./loading";
import Error from "./error";
import ProductsList from "./productsList";
import { url } from "./js/constants";
import useApi from "../store/apiStore";
import { shallow } from "zustand/shallow";

function ProductsData() {

  const { products, isLoading, isError } = useApi(
    (state) => ({
      products: state.products,
      isLoading: state.isLoading,
      isError: state.isError,
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

  return ProductsList(products);
}

export default ProductsData;