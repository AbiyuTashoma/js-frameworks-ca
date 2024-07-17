import GetApi from "../api/getApi";
import Loading from "./loading";
import Error from "./error";
import { useParams } from "react-router-dom";
import DisplayAProduct from "./displayAProduct";

const url = 'https://v2.api.noroff.dev/online-shop';

function Product() {
  let { id } = useParams();

  const { data, isLoading, isError } = GetApi(url + `/${id}`);

  if (isLoading || !data) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  console.log(data['data']);

  return DisplayAProduct(data['data']);
}

export default Product;