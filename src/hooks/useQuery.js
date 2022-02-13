import { useState, useEffect } from "react";


function useQuery() {
  const [category, setCategory] = useState("burger");
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${category}&number=100`)
      .then((r) => r.json())
      .then((food) => {
        setFood(food.results);
      });
  }, [category]);

  return {
    food: food,
    setCategory
  };
}

export default useQuery;