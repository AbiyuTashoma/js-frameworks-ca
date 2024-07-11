import GetApi from "../api/getApi";
import Loading from "./loading";
import Error from "./error";
import Products from "./productsList";

const url = 'https://v2.api.noroff.dev/online-shop';

function ProductsData() {
  const { data, isLoading, isError } = GetApi(url);

  if (isLoading || !data) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  console.log(data['data']);

  return Products(data['data']);
}

export default ProductsData;