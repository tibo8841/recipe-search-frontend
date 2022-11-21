import { useEffect, useState } from "react";
import { checkSessions, endSession } from "./Networking";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [sessionAuthentication, setSessionAuthentication] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    }
  }

  const navigate = useNavigate();
  const navigateHome = () => navigate("/");

  function logOut() {
    endSession();
    navigateHome();
    window.location.reload(false);
  }

  return (
    <div className="main-content">
      {loading ? (
        <div className="loading-screen">
          <h4>loading...</h4>
        </div>
      ) : sessionAuthentication ? (
        <div className="profile-content">
          <h3>here is your profile {username}</h3>
          <h4>stufffff</h4>
          <button onClick={logOut} className="save-button">
            log out
          </button>
        </div>
      ) : (
        <h5>you need to log in to see profile</h5>
      )}
    </div>
  );
}
