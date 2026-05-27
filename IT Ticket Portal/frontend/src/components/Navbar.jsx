import { Link } from "react-router-dom";

import {
FaSignInAlt,
FaUser,
FaSignOutAlt
} from "react-icons/fa";

import {
useSelector,
useDispatch
} from "react-redux";

import {
logoutUser
} from "../store/slices/userSlice";

function Navbar(){

const { user } = useSelector(
(state)=>state.user
);

const dispatch = useDispatch();

function logout(){

dispatch(logoutUser());

}

return(

<nav>

<Link to="/">Home</Link> |{" "}

<Link to="/dashboard">
Dashboard
</Link> |{" "}

<Link to="/create-ticket">
Create Ticket
</Link> |{" "}

<Link to="/mytickets">
My Tickets
</Link> |{" "}

{user ? (

<>

<span>

Welcome {user.name}

</span>

{" | "}

<button onClick={logout}>

<FaSignOutAlt />

Logout

</button>

</>

) : (

<>

<Link to="/login">

<FaSignInAlt /> Login

</Link> |{" "}

<Link to="/register">

<FaUser /> Register

</Link>

</>

)}

</nav>

)

}

export default Navbar;