import Multiselect from "multiselect-react-dropdown";
import { useState, useEffect } from "react";
import { getIngredients } from "./Networking";

export default function MultiSelectDropDown(props) {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const fetchIngredients = async () => {
      const ingredients = await getIngredients();
      console.log(ingredients.ingredients);
      setOptions(ingredients.ingredients);
    };
    fetchIngredients();
  }, []);

  if (props.type === "diet") {
  }
  if (props.type === "cuisine") {
  }

  if (props.type === "ingredients") {
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      <Multiselect
        options={options}
        displayValue="ingredient_name"
        placeholder={`Select ${props.type}`}
      />
    </div>
  );
}
