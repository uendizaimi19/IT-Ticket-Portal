import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const user =
  JSON.parse(localStorage.getItem("user"));

  const isAdmin =
user?.role === "admin";

  const logout = ()=>{

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <nav>

      <Link to="/">
        Home
      </Link>

      {user && !isAdmin && (

  <>
    <Link to="/dashboard">
      Dashboard
    </Link>

    <Link to="/create-ticket">
      Create Ticket
    </Link>

    <Link to="/mytickets">
      My Tickets
    </Link>
  </>

)}

{user && isAdmin && (

  <>
    <Link to="/alltickets">
      All Tickets
    </Link>
  </>

)}

      {

        user ? (

          <>

            <span>

              Welcome
              {" "}
              {user.name}

            </span>

            <button
              className="button"
              onClick={logout}
            >

              Logout

            </button>

          </>

        ) : (

          <>

            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>

          </>

        )

      }

    </nav>

  );

}

export default Navbar;