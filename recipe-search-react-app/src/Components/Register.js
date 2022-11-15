import { registerUser } from "./Networking";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      password: data.get("password"),
      confirmPassword: data.get("confirm-password"),
    });
    if (data.get("password") === data.get("confirm-password")) {
      const registerCheck = await registerUser(
        data.get("username"),
        data.get("password")
      );
      if (registerCheck.response === "username already exists") {
        console.log(registerCheck.response);
      } else {
        console.log(registerCheck.response);
        navigate("/login");
      }
    } else {
      console.log("passwords do not match");
    }
  };

  return (
    <div className="login-form">
      <div className="login-container">
        <div className="login-content">
          <h2>Register</h2>
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
            <div className="input-container">
              <input
                type="confirm-password"
                name="confirm-password"
                placeholder="confirm password"
                className="input-field"
                required
              />
            </div>
            <div className="button-container">
              <input
                type="submit"
                className="input-button"
                value={"register"}
              />
            </div>
          </form>
          <div className="link-text">
            <a href="/login">Already have an account? Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
}
