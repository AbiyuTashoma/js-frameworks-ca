import GetApi from "../api/getApi";
import Loading from "./loading";
import Error from "./error";
import ProductsList from "./productsList";
import { url } from "./js/constants";

function ProductsData() {
  const { data, isLoading, isError } = GetApi(url);

  if (isLoading || !data) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  console.log(data['data']);

  return ProductsList(data['data']);
}

export default ProductsData;