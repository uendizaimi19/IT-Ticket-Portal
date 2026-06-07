import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword]
  = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {

toast.error("Registration failed");
      return;

    }

    try {

      await axios.post(

        "http://localhost:8000/api/users/register",

        {
          name,
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

toast.success("Registration successful");

      navigate("/login");

    } catch (error) {

      console.log(error);

toast.error("Registration failed");
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

          Register

        </h1>

        <p

          style={{

            color:"#6b7280",
            marginBottom:"30px",
            fontSize:"16px"

          }}

        >

          Create your IT portal account.

        </p>

        <form onSubmit={handleSubmit}>

          <input

            type="text"

            placeholder="Enter your name"

            className="input"

            value={name}

            onChange={(e)=>
              setName(e.target.value)
            }

          />

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

          <input

            type="password"

            placeholder="Confirm password"

            className="input"

            value={confirmPassword}

            onChange={(e)=>
              setConfirmPassword(e.target.value)
            }

          />

          <button

            type="submit"

            className="button"

            style={{
              width:"100%"
            }}

          >

            Create Account

          </button>

        </form>

      </div>

    </div>

  );

}

export default Register;