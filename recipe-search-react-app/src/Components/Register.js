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
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div className="input-container">
          <label>Confirm Password </label>
          <input type="confirm-password" name="confirm-password" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <a href="/login">Already have an account? Sign in</a>
      </form>
    </div>
  );
}
