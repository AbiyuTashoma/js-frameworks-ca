import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import useApi from "../store/apiStore";

function GetApi(link) {
  const { updateProducts, updateIsLoading, updateIsError } = useApi(
    (state) => ({
      products: state.products,
      isLoading: state.isLoading,
      isError: state.isError,
      updateProducts: state.updateProducts,
      updateIsLoading: state.updateIsLoading,
      updateIsError: state.updateIsError
    }),
    shallow
  );

  useEffect(() => {
    async function getData() {
      try {
        updateIsLoading(true);
        updateIsError(false);

        const response = await fetch(link);
        const json = await response.json();

        updateProducts(json['data']);

      } catch (error) {
        updateIsError(true);
      } finally {
        updateIsLoading(false);
      }
    }

    getData();
  }, [updateProducts, updateIsLoading, updateIsError, link]);
}

export default GetApi;