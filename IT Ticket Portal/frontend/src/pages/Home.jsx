import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user"));

  const isAdmin =
    user?.role === "admin";

  if (isAdmin) {

    return (

      <div
        className="page-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh"
        }}
      >

        <div
          className="card"
          style={{
            maxWidth: "700px",
            width: "100%",
            textAlign: "center"
          }}
        >

          <h1
            style={{
              fontSize: "48px",
              marginBottom: "20px"
            }}
          >
            Welcome Admin
          </h1>

          <p
            style={{
              color: "#6b7280",
              marginBottom: "30px",
              fontSize: "18px"
            }}
          >
            Manage user support tickets and monitor the system.
          </p>

          <button
            className="button"
            onClick={() => navigate("/alltickets")}
          >
            Manage Tickets
          </button>

        </div>

      </div>

    );

  }

  return (

    <div

      style={{

        minHeight:"100vh",

        display:"flex",

        justifyContent:"center",

        alignItems:"center",

        background:"#f7f8fc",

        padding:"40px"

      }}

    >

      <div

        style={{

          background:"white",

          padding:"60px",

          borderRadius:"28px",

          width:"100%",

          maxWidth:"900px",

          boxShadow:
          "0 8px 30px rgba(0,0,0,0.06)",

          textAlign:"center"

        }}

      >

        <h1

          style={{

            fontSize:"64px",

            lineHeight:"1.1",

            color:"#111827",

            marginBottom:"22px",

            fontWeight:"700"

          }}

        >

          IT Ticket Portal

        </h1>

        <p

          style={{

            fontSize:"20px",

            color:"#6b7280",

            maxWidth:"650px",

            margin:"0 auto",

            lineHeight:"1.7",

            marginBottom:"40px"

          }}

        >

          Submit, manage, and track IT support requests through this ticketing platform.

        </p>

        <div

          style={{

            display:"flex",

            justifyContent:"center",

            gap:"16px",

            flexWrap:"wrap"

          }}

        >

          <button

            className="button"

            onClick={() =>
              navigate("/create-ticket")
            }

            style={{

              padding:"16px 28px",

              fontSize:"16px"

            }}

          >

            Create Ticket

          </button>

          <button

            onClick={() =>
              navigate("/dashboard")
            }

            style={{

              background:"white",

              color:"#111827",

              border:"1px solid #e5e7eb",

              padding:"16px 28px",

              borderRadius:"14px",

              fontSize:"16px",

              fontWeight:"600",

              cursor:"pointer"

            }}

          >

            View Dashboard

          </button>

        </div>

      </div>

    </div>

  );

}

export default Home;