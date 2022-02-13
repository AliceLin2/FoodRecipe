import { useState, useEffect } from "react";
const apiKey = '941205c952d74f858eb632f8424e9857'

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
    category,
    setCategory
  };
}

export default useQuery;