import Multiselect from "multiselect-react-dropdown";
import { useState, useEffect } from "react";
import { getIngredients, getCuisines, getDiets } from "./Networking";

export default function MultiSelectDropDown(props) {
  const [options, setOptions] = useState([]);
  const [displayValue, setDisplayValue] = useState("");
  const [selectionLimit, setSelectionLimit] = useState(-1);

  useEffect(() => {
    if (props.type === "ingredient") {
      const fetchIngredients = async () => {
        const ingredients = await getIngredients();
        setOptions(ingredients.ingredients);
      };
      fetchIngredients();
      setDisplayValue("ingredient_name");
    }
    if (props.type === "cuisine") {
      const fetchCuisines = async () => {
        const cuisines = await getCuisines();
        setOptions(cuisines.cuisines);
      };
      fetchCuisines();
      setDisplayValue("cuisine_name");
    }
    if (props.type === "diet") {
      const fetchDiets = async () => {
        const diets = await getDiets();
        setOptions(diets.diets);
      };
      fetchDiets();
      setDisplayValue("diet_name");
    }
    if (props.singleSelect) {
      setSelectionLimit(1);
    }
  }, [props.type, props.singleSelect]);

  function onSelect(selectedList, selectedItem) {
    props.addToArr(selectedItem);
  }

  function onRemove(selectedList, selectedItem) {
    props.removeFromArr(selectedItem);
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      <Multiselect
        avoidHighlightFirstOption={true}
        options={options}
        displayValue={displayValue}
        placeholder={`Select ${props.type}s`}
        onSelect={onSelect}
        onRemove={onRemove}
        selectionLimit={selectionLimit}
        style={{
          inputField: { height: "3em" },
          multiselectContainer: { marginTop: "0.5em" },
        }}
      />
    </div>
  );
}
