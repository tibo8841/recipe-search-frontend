import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function DropDown(props) {
  const cuisineOptions = ["mexican", "italian", "indian"];
  const dietOptions = ["vegetarian", "vegan", "halal"];

  let options;
  let title;

  if (props.type === "cuisine") {
    options = cuisineOptions;
    title = "Cuisine";
  } else if (props.type === "diet") {
    options = dietOptions;
    title = "Diet";
  }

  return (
    <div>
      <Dropdown
        options={options}
        placeholder={title}
        onChange={props.selectType}
      />
    </div>
  );
}
