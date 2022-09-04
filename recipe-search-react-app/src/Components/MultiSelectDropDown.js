import Multiselect from "multiselect-react-dropdown";

export default function MultiSelectDropDown(props) {
  const cuisineOptions = [
    { name: "mexican", id: 1 },
    { name: "italian", id: 2 },
    { name: "indian", id: 3 },
  ];
  return (
    <div>
      <Multiselect options={cuisineOptions} displayValue="name" />
    </div>
  );
}
