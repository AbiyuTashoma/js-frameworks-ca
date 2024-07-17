import GetApi from "../api/getApi";
import Loading from "./loading";
import Error from "./error";
import { useParams } from "react-router-dom";
import DisplayAProduct from "./displayAProduct";
import useStore from "../store/cart";
import { shallow } from "zustand/shallow";

const url = 'https://v2.api.noroff.dev/online-shop';

function Product() {
  let { id } = useParams();

  const { data, isLoading, isError } = GetApi(url + `/${id}`);
  const { cart, total, addProduct, removeProduct, clearCart } = useStore(
    (state) => ({
      cart: state.cart,
      total: state.total,
      addProduct: state.addProduct,
      removeProduct: state.removeProduct,
      clearCart: state.clearCart
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

  return DisplayAProduct(data['data'], cart, total, addProduct, removeProduct, clearCart);
}

export default Product;