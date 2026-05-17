import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleError = (err) =>
    toast.error(err, {
      position: "top-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3002/signup",
        {
          username: name,
          email: email,
          password: password,
        },
        { withCredentials: true },
      )
      .then((response) => {
        const { success, message } = response.data || {};
      
        if (success) {
          handleSuccess(message);
          // Delay navigation slightly so toast can render before unmount
          setTimeout(() => window.location.replace("http://localhost:3001"), 700);
          console.log("Signup successful");
        } else {
          handleError(message || "Signup failed");
        }

        console.log(response.data);
        // Handle successful signup logic here
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        // Handle signup error logic here
      });
    // Handle form submission logic here
  };
  return (
    <div className="container">
        <h1 className="my-5">Sign Up Account</h1>
      <form>
        <div className="mb-2">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>

        <div className="mb-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
</div>

        <div className="mb-2">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
         Already have an account? <Link to={"/login"}>Login</Link>
      </form>
        <ToastContainer />
    </div>
  );
}

export default SignUp;
