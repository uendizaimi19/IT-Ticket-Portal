import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {

  const [email, setEmail]
  = useState("");

  const [password, setPassword]
  = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        "http://localhost:8000/api/users/login",

        {
          email,
          password,
        },

        {
          headers: {
            "Content-Type":
            "application/json",
          },
        }

      );

      localStorage.setItem(

        "user",

        JSON.stringify(response.data)

      );

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

toast.error("Login failed");
    }

  };

  return (

    <div className="auth-container">

      <div className="card auth-card">

        <h1
          className="page-title"
          style={{
            fontSize:"42px",
            marginBottom:"12px"
          }}
        >

          Login

        </h1>

        <p

          style={{

            color:"#6b7280",
            marginBottom:"30px",
            fontSize:"16px"

          }}

        >

          Login and start managing tickets.

        </p>

        <form onSubmit={handleSubmit}>

          <input

            type="email"

            placeholder="Enter your email"

            className="input"

            value={email}

            onChange={(e)=>
              setEmail(e.target.value)
            }

          />

          <input

            type="password"

            placeholder="Enter your password"

            className="input"

            value={password}

            onChange={(e)=>
              setPassword(e.target.value)
            }

          />

          <button

            type="submit"

            className="button"

            style={{
              width:"100%"
            }}

          >

            Login

          </button>

        </form>

      </div>

    </div>

  );

}

export default Login;