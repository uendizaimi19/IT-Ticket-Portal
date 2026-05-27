import { useSelector } from "react-redux";

function Dashboard(){

const { user } = useSelector(
(state)=>state.user
);

return(

<div>

<h1>

Welcome {user?.name}

</h1>

<p>

IT Ticket Portal Dashboard

</p>

<hr/>

<div>

<h3>User Information</h3>

<p>

Name: {user?.name}

</p>

<p>

Email: {user?.email}

</p>

</div>

</div>

)

}

export default Dashboard