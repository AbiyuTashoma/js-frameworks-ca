import ProductsData from "../../data/productsData";
import Search from "../../data/search";

function Home() {
  return  (
    <div className="main-section">
      <Search />
      <ProductsData />
    </div>
);
}

export default Home;