import ProductsData from "../data/productsData";
import Search from "../data/search";

function Home() {
  return  (
    <div>
      <Search />
      <ProductsData />
    </div>
);
}

export default Home;