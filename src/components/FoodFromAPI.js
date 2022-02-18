import React, {useEffect, useState} from "react";
import useQuery from "../hooks/useQuery";
import MenuList from "./MenuList";
import Filter from "./Filter"
import Search from "./Search"
import RecipeDetail from "./RecipeDetail"

const apiKey = '85f445f6ae634ae99bfc878b2dbf5075'

function FoodFromAPI() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState([]);
  const [showDetail, setShowDetail] = useState(false)
  const {food, setCategory } = useQuery();

  useEffect(()=>{
    window.scrollTo(0,0)
  })

  function handleFilter(e) {
      setCategory(e.target.value);
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value.toLowerCase())
    setTimeout(()=>setCategory(searchTerm),1000);
  }

  function handleSelectFood(id){
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
    .then((r) => r.json())
    .then((data) => {
        setSelectedFood(data);
        setShowDetail(true)
    });
  }

  return (
    <div>
      <Filter handleFilter={handleFilter}/>
      <Search handleSearch={handleSearch}/>
      {showDetail ? (<RecipeDetail selectedFood={selectedFood} onShowDetail={setShowDetail}/>) : null}
      <MenuList
        food={food}
        searchTerm={searchTerm}
        onSelectFood={handleSelectFood}
      />
    </div>
  );
}

export default FoodFromAPI;