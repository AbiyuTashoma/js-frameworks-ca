import { useState, useEffect } from "react";
import Loading from "./loading";
import Error from "./error";
import Products from "./products";

const url = 'https://v2.api.noroff.dev/online-shop';

function Data() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData(apiUrl) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(apiUrl);
        const json = await response.json();

        setData(json);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData(url);
  }, []);

  if (isLoading || !data) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  console.log(data['data']);

  return Products(data['data']);
}

export default Data;