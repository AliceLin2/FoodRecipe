import { useState, useEffect } from "react";

const apiKey = '85f445f6ae634ae99bfc878b2dbf5075'

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