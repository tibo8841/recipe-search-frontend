import { getLogin, startSession, checkSessions } from "./Networking";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginCheck = await getLogin(
      data.get("username"),
      data.get("password")
    );
    if (loginCheck.response === "User Found") {
      await startSession(loginCheck.user.id);
      console.log(loginCheck.user.id);
      console.log("sessions should be started");
      console.log(await checkSessions());
      navigate("/");
      window.location.reload(false);
    } else {
      console.log(loginCheck.response);
    }
  };

  return (
    <div className="login-form">
      <div className="login-container">
        <div className="login-content">
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className="login">
            <div className="input-container">
              <input
                type="text"
                name="username"
                placeholder="username"
                className="input-field"
                required
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input-field"
                required
              />
            </div>
            <div className="button-container">
              <input type="submit" className="input-button" value={"login"} />
            </div>
            <div className="link-text">
              <a href="/register">Don't have an account? Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
