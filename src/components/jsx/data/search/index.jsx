import useApi from "../../store/apiStore";
import useSearch from "../../store/searchStore";
import { shallow } from "zustand/shallow";
import SearchLabel from "../searchLabel";


function Search() {
  const { updateProducts } = useApi(
    (state) => ({
      updateProducts: state.updateProducts,
    }),
    shallow
  );

  const { searchProducts } = useSearch(
    (state) => ({
      searchProducts: state.searchProducts,
    }),
    shallow
  );

  function handleOnChange (txt) {
    const newProducts = searchProducts.filter((item) => item['title'].toLowerCase().includes(txt.toLowerCase()));
    updateProducts(newProducts);
  }

  return (
      <form className="input-group search-form">
          <SearchLabel />
          <input type="search" onChange={(event) => handleOnChange(event.target.value)} className="form-control" id="search" placeholder="search here"/>
        </form>
  );
}

export default Search;