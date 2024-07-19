import GetApi from "../api/getApi";
import Loading from "./loading";
import Error from "./error";
import { useParams } from "react-router-dom";
import DisplayAProduct from "./displayAProduct";
import { shallow } from "zustand/shallow";
import useStore from "../store/cartStore";
import { url } from "./js/constants";

function Product() {
  let { id } = useParams();
  const { data, isLoading, isError } = GetApi(url + `/${id}`);

  const { cart, addProduct, removeProduct } = useStore(
    (state) => ({
      cart: state.cart,
      addProduct: state.addProduct,
      removeProduct: state.removeProduct,
    }), 
    shallow,
  );

  if (isLoading || !data) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  console.log(data['data']);

  return DisplayAProduct(data['data'], cart, addProduct, removeProduct);
}

export default Product;