import Multiselect from "multiselect-react-dropdown";
import { useState, useEffect } from "react";
import { getIngredients, getCuisines, getDiets } from "./Networking";

export default function MultiSelectDropDown(props) {
  const [options, setOptions] = useState([]);
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    if (props.type === "ingredients") {
      const fetchIngredients = async () => {
        const ingredients = await getIngredients();
        setOptions(ingredients.ingredients);
      };
      fetchIngredients();
      setDisplayValue("ingredient_name");
    }
    if (props.type === "cuisines") {
      const fetchCuisines = async () => {
        const cuisines = await getCuisines();
        setOptions(cuisines.cuisines);
      };
      fetchCuisines();
      setDisplayValue("cuisine_name");
    }
    if (props.type === "diets") {
      const fetchDiets = async () => {
        const diets = await getDiets();
        setOptions(diets.diets);
      };
      fetchDiets();
      setDisplayValue("diet_name");
    }
  }, [props.type]);

  return (
    <div style={{ marginBottom: "10px" }}>
      <Multiselect
        options={options}
        displayValue={displayValue}
        placeholder={`Select ${props.type}`}
      />
    </div>
  );
}
