import { useState } from "react";
import TicketCard from "../components/TicketCard";

function MyTickets({tickets,setTickets}){

const [search,setSearch]=useState("");
const [priorityFilter,setPriorityFilter]=useState("");
const [sortOrder,setSortOrder]=useState("");

function deleteTicket(index){

const updatedTickets=
tickets.filter((ticket,i)=>i!==index);

setTickets(updatedTickets);

}

return(

<div>

<h2>My Tickets</h2>

<input
type="text"
placeholder="Search tickets..."
onChange={(e)=>setSearch(e.target.value)}
/>

<br/><br/>

<select onChange={(e)=>setPriorityFilter(e.target.value)}>

<option value="">All Priorities</option>
<option>Low</option>
<option>Medium</option>
<option>High</option>
<option>Critical</option>

</select>

<br/><br/>

<select onChange={(e)=>setSortOrder(e.target.value)}>

<option value="">Sort</option>

<option value="high">
High Priority First
</option>

<option value="low">
Low Priority First
</option>

</select>

<br/><br/>

{tickets

.filter(ticket =>
ticket.title.toLowerCase().includes(search.toLowerCase())
)

.filter(ticket =>
priorityFilter === "" ||
ticket.priority === priorityFilter
)

.sort((a,b)=>{

const priorityValues={
Low:1,
Medium:2,
High:3,
Critical:4
};

if(sortOrder==="high"){
return priorityValues[b.priority]-
priorityValues[a.priority]
}

if(sortOrder==="low"){
return priorityValues[a.priority]-
priorityValues[b.priority]
}

return 0

})

.map((ticket,index)=>(

<TicketCard
key={index}
ticket={ticket}
index={index}
deleteTicket={deleteTicket}
/>

))}

</div>

)

}

export default MyTickets