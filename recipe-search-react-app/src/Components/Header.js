import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function navigateHome() {
    navigate("");
  }

  return (
    <div className="app-header">
      <h1 onClick={navigateHome} style={{ cursor: "pointer" }}>
        RECIPE SEARCH
      </h1>
    </div>
  );
}
