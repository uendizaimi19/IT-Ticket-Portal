import { useEffect, useState } from "react";
import axios from "axios";

function MyTickets() {

  const [tickets, setTickets] = useState([]);

  const [search, setSearch] = useState("");

  const [priorityFilter, setPriorityFilter] = useState("");

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

  useEffect(() => {

    fetchTickets();

  }, []);

  const filteredTickets = tickets.filter((ticket) => {

    const matchesSearch = ticket.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPriority =

      priorityFilter === ""

      ||

      ticket.priority === priorityFilter;

    return matchesSearch && matchesPriority;

  });

  return (

    <div

      style={{

        padding:"40px",
        background:"#f7f8fc",
        minHeight:"100vh"

      }}

    >

      <h1

        style={{

          fontSize:"38px",
          color:"#111827",
          marginBottom:"30px",
          fontWeight:"600"

        }}

      >

        My Tickets

      </h1>

      <div

        style={{

          display:"flex",
          gap:"15px",
          marginBottom:"35px",
          flexWrap:"wrap"

        }}

      >

        <input

          type="text"

          placeholder="Search tickets..."

          value={search}

          onChange={(e)=>
            setSearch(e.target.value)
          }

          style={{

            padding:"14px 18px",
            borderRadius:"14px",
            border:"1px solid #e5e7eb",
            width:"280px",
            background:"white",
            fontSize:"15px",
            outline:"none"

          }}

        />

        <select

          value={priorityFilter}

          onChange={(e)=>
            setPriorityFilter(e.target.value)
          }

          style={{

            padding:"14px 18px",
            borderRadius:"14px",
            border:"1px solid #e5e7eb",
            background:"white",
            fontSize:"15px",
            outline:"none",
            cursor:"pointer"

          }}

        >

          <option value="">
            All Priorities
          </option>

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

      </div>

      {

        filteredTickets.length > 0 ? (

          <div

            style={{

              display:"grid",

              gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",

              gap:"22px"

            }}

          >

            {

              filteredTickets.map((ticket)=>(

                <div

                  key={ticket._id}

                  style={{

                    background:"white",
                    borderRadius:"22px",
                    padding:"24px",
                    boxShadow:
                    "0 4px 12px rgba(0,0,0,0.05)",

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

                        color:"#111827",
                        fontSize:"22px",
                        fontWeight:"600"

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
                        fontWeight:"600",
                        color:"#111827"

                      }}

                    >

                      {ticket.priority}

                    </span>

                  </div>

                  <p
                    style={{
                      color:"#6b7280",
                      marginBottom:"10px"
                    }}
                  >

                    <b>Category:</b>
                    {" "}
                    {ticket.category}

                  </p>

                  <p
                    style={{
                      color:"#6b7280",
                      marginBottom:"18px",
                      lineHeight:"1.6"
                    }}
                  >

                    {ticket.description}

                  </p>

                  <div

                    style={{

                      display:"flex",
                      justifyContent:"space-between",
                      alignItems:"center"

                    }}

                  >

                    <span

                      style={{

                        color:"#10b981",
                        fontWeight:"600"

                      }}

                    >

                      <p>

  <strong>Status:</strong>

  <span

    className={

      ticket.status === "Open"

      ? "status-open"

      : ticket.status === "In Progress"

      ? "status-progress"

      : ticket.status === "Resolved"

      ? "status-resolved"

      : "status-closed"

    }

  >

    {" "}
    {ticket.status}

  </span>

</p>

                    </span>

                    <button

                      onClick={async()=>{

                        try{

                          const user =
                          JSON.parse(
                            localStorage.getItem("user")
                          );

                          const config = {

                            headers:{

                              Authorization:
                              `Bearer ${user.token}`

                            }

                          };

                          await axios.delete(

                            `http://localhost:8000/api/tickets/${ticket._id}`,

                            config

                          );

                          setTickets(

                            tickets.filter(

                              (t)=>
                              t._id !== ticket._id

                            )

                          );

                        }catch(error){

                          console.log(error);

                        }

                      }}

                      style={{

                        background:"#111827",
                        color:"white",
                        border:"none",
                        padding:"10px 16px",
                        borderRadius:"12px",
                        cursor:"pointer",
                        fontWeight:"500"

                      }}

                    >

                      Delete

                    </button>

                  </div>

                </div>

              ))

            }

          </div>

        ) : (

          <h2
            style={{
              color:"#6b7280"
            }}
          >
            No tickets found
          </h2>

        )

      }

    </div>

  );

}

export default MyTickets;