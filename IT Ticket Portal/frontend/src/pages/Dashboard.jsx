import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {

    const fetchTickets = async () => {

      try {

        const user = JSON.parse(
          localStorage.getItem("user")
        );

        const config = {

          headers: {

            Authorization:
              `Bearer ${user.token}`

          }

        };

        const response = await axios.get(

          "http://localhost:8000/api/tickets",

          config

        );

        setTickets(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchTickets();

  }, []);

  return (

    <div className="page-container">

      <h1 className="page-title">
        Dashboard
      </h1>

      <h2
        style={{
          marginBottom:"30px",
          color:"#374151"
        }}
      >
        Total Tickets:
        {" "}
        {tickets.length}
      </h2>

      <div

        style={{

          display:"flex",
          gap:"24px",
          marginBottom:"40px",
          flexWrap:"wrap"

        }}

      >

        <div

          className="card"

          style={{
            width:"240px"
          }}

        >

          <h2
            style={{
              marginBottom:"12px"
            }}
          >
            Open Tickets
          </h2>

          <p
            style={{
              fontSize:"28px",
              fontWeight:"600",
              color:"#111827"
            }}
          >

            {

              tickets.filter(

                (ticket)=>

                ticket.status === "Open"

              ).length

            }

          </p>

        </div>

        <div

          className="card"

          style={{
            width:"240px"
          }}

        >

          <h2
            style={{
              marginBottom:"12px"
            }}
          >
            High Priority
          </h2>

          <p
            style={{
              fontSize:"28px",
              fontWeight:"600",
              color:"#111827"
            }}
          >

            {

              tickets.filter(

                (ticket)=>

                ticket.priority === "High"

                ||

                ticket.priority === "Critical"

              ).length

            }

          </p>

        </div>

      </div>

      <h2

        style={{

          marginBottom:"20px",
          color:"#111827"

        }}

      >

        Recent Tickets

      </h2>

      <div
        className="ticket-grid"
      >

        {

          tickets.slice(0,3).map((ticket)=>(

            <div

              key={ticket._id}

              className="card"

              style={{

                border:

                ticket.priority === "Critical"

                ? "1px solid #ffb4b4"

                :

                ticket.priority === "High"

                ? "1px solid #ffd6a5"

                :

                ticket.priority === "Medium"

                ? "1px solid #ffe69c"

                :

                "1px solid #d1fae5"

              }}

            >

              <div

                style={{

                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  marginBottom:"15px"

                }}

              >

                <h2
                  style={{
                    fontSize:"22px"
                  }}
                >

                  {ticket.title}

                </h2>

                <span

                  style={{

                    background:

                    ticket.priority === "Critical"

                    ? "#ffe5e5"

                    :

                    ticket.priority === "High"

                    ? "#fff0db"

                    :

                    ticket.priority === "Medium"

                    ? "#fff8d9"

                    :

                    "#dcfce7",

                    padding:"8px 12px",
                    borderRadius:"999px",
                    fontSize:"13px",
                    fontWeight:"600"

                  }}

                >

                  {ticket.priority}

                </span>

              </div>

              <p
                style={{
                  color:"#6b7280",
                  marginBottom:"12px"
                }}
              >

                {ticket.description}

              </p>

              <p
                style={{
                  color:"#6b7280",
                  marginBottom:"8px"
                }}
              >

                <b>Category:</b>
                {" "}
                {ticket.category}

              </p>

              <p
                style={{
                  color:"#10b981",
                  fontWeight:"600"
                }}
              >

                ● {ticket.status}

              </p>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default Dashboard;