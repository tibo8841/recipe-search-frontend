import Multiselect from "multiselect-react-dropdown";

export default function MultiSelectDropDown(props) {
  const cuisineOptions = [
    { name: "mexican", id: 1 },
    { name: "italian", id: 2 },
    { name: "indian", id: 3 },
    { name: "thai", id: 4 },
    { name: "chinese", id: 5 },
  ];

  return (
    <div style={{ marginBottom: "10px" }}>
      <Multiselect
        options={cuisineOptions}
        displayValue="name"
        placeholder="Select Cuisine"
      />
    </div>
  );
}
