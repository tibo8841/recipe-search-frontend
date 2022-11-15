import { useNavigate } from "react-router-dom";
import { checkSessions, endSession } from "./Networking";
import { useState, useEffect } from "react";

export default function Header() {
  const [sessionAuthentication, setSessionAuthentication] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    checkLoggedIn();
  }, []);

  async function checkLoggedIn() {
    const session = await checkSessions();
    const user = session.username;
    const authentication = session.response;
    if (authentication) {
      setSessionAuthentication(true);
      setUsername(user);
    }
  }

  const navigate = useNavigate();
  const navigateHome = () => navigate("");
  const navigateLogin = () => navigate("/login");
  const navigateProfile = () => navigate("/profile");

  return (
    <div className="app-header">
      <h1
        onClick={navigateHome}
        style={{ cursor: "pointer" }}
        className="header-text"
      >
        Recipe Search 🍴
      </h1>
      <div className="header-login">
        {sessionAuthentication ? (
          <h4 onClick={navigateProfile}>{username}</h4>
        ) : (
          <h4 onClick={navigateLogin}>Login</h4>
        )}
      </div>
    </div>
  );
}
