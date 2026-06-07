import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

function CreateTicket() {

  const [title, setTitle] = useState("");

  const [category, setCategory] = useState("");

  const [description, setDescription]
  = useState("");

  const [priority, setPriority]
  = useState("Low");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const config = {

        headers: {

          Authorization:
          `Bearer ${user.token}`,

          "Content-Type":
          "application/json"

        }

      };

      await axios.post(

        "http://localhost:8000/api/tickets",

        {
          title,
          category,
          description,
          priority
        },

        config

      );

    toast.success("Ticket created successfully")
      navigate("/mytickets");

    } catch (error) {

      console.log(error);

     toast.error("Failed to create ticket")
    }

  };

  return (

    <div className="page-container">

      <div

        className="card"

        style={{

          maxWidth:"700px",
          margin:"40px auto"

        }}

      >

        <h1 className="page-title">
          Create Ticket
        </h1>

        <form onSubmit={handleSubmit}>

          <input

            type="text"

            placeholder="Ticket title"

            className="input"

            value={title}

            onChange={(e)=>
              setTitle(e.target.value)
            }

          />

          <select
  className="select"
  value={category}
  onChange={(e) =>
    setCategory(e.target.value)
  }
>

  <option value="">
    Select Category
  </option>

  <option value="Internet Connectivity">
    Internet Connectivity
  </option>

  <option value="Wi-Fi">
    Wi-Fi
  </option>

  <option value="VPN">
    VPN
  </option>

  <option value="Computer">
    Computer
  </option>

  <option value="Printer">
    Printer
  </option>

  <option value="Phone">
    Phone
  </option>

  <option value="Password Reset">
    Password Reset
  </option>

  <option value="Account Locked">
    Account Locked
  </option>

  <option value="Access Permission">
    Access Permission
  </option>

  <option value="Software Installation">
    Software Installation
  </option>

  <option value="Software Configuration">
    Software Configuration
  </option>

  <option value="Software Update">
    Software Update
  </option>

  <option value="Other">
    Other
  </option>

</select>

          <textarea

            placeholder="Describe the issue"

            className="textarea"

            value={description}

            onChange={(e)=>
              setDescription(e.target.value)
            }

          />

          <select

            className="select"

            value={priority}

            onChange={(e)=>
              setPriority(e.target.value)
            }

          >

            <option value="Low">
              Low
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="High">
              High
            </option>

            <option value="Critical">
              Critical
            </option>

          </select>

          <button
            type="submit"
            className="button"
          >

            Create Ticket

          </button>

        </form>

      </div>

    </div>

  );

}

export default CreateTicket;