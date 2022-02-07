import React, {useState} from "react";
import useQuery from "./hooks/useQuery";
import MenuList from "./MenuList";
import Filter from "./Filter"
import Search from "./Search"
import RecipeDetail from "./RecipeDetail"

const apiKey = '941205c952d74f858eb632f8424e9857'

function FoodFromAPI() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState([]);
  const {food, setCategory } = useQuery();

  function handleFilter(e) {
    e.target.value === "No Filter"
      ? setCategory("")
      : setCategory(e.target.value);
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  function handleSelectFood(id){
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
    .then((r) => r.json())
    .then((data) => {
        setSelectedFood(data);
        console.log(data)
    });
  }

  return (
    <div>
      <Filter handleFilter={handleFilter}/>
      <Search handleSearch={handleSearch}/>
      {selectedFood.length !== 0 ? (<RecipeDetail selectedFood={selectedFood}/>) : null}
      <MenuList
        food={food}
        searchTerm={searchTerm}
        onSelectFood={handleSelectFood}
      />
    </div>
  );
}

export default FoodFromAPI;