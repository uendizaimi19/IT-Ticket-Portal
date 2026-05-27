import { useState } from "react";

function CreateTicket({tickets,setTickets}) {

const [title, setTitle] = useState("");
const [device, setDevice] = useState("");
const [description, setDescription] = useState("");
const [priority, setPriority] = useState("Low");

function handleSubmit(e){

e.preventDefault();

const newTicket = {

title,
device,
description,
priority,
status:"Open"

};

setTickets([...tickets,newTicket]);

setTitle("");
setDevice("Laptop");
setDescription("");
setPriority("Low");

}

return(

<div>

<h2>Create Ticket</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Ticket Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<br/><br/>

<select
value={device}
onChange={(e)=>setDevice(e.target.value)}
>

<option>Laptop</option>
<option>Desktop</option>
<option>Printer</option>
<option>Network</option>
<option>Software</option>

</select>

<br/><br/>

<textarea
placeholder="Describe issue"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<br/><br/>

<select
value={priority}
onChange={(e)=>setPriority(e.target.value)}
>

<option>Low</option>
<option>Medium</option>
<option>High</option>
<option>Critical</option>

</select>

<br/><br/>

<button>Create Ticket</button>

</form>

</div>

)

}

export default CreateTicket