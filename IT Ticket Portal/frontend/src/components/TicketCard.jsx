function TicketCard({ticket,index,deleteTicket}){

return(

<div

style={{
border:"1px solid black",
padding:"10px",
margin:"10px",
borderRadius:"10px"
}}

>

<p><b>Title:</b> {ticket.title}</p>

<p><b>Device:</b> {ticket.device}</p>

<p><b>Description:</b> {ticket.description}</p>

<p><b>Priority:</b> {ticket.priority}</p>

<p>

<b>Status:</b>

{ticket.status==="Open"
? "🟢 Open"
: ticket.status}

</p>

<button
onClick={()=>deleteTicket(index)}
>

Delete

</button>

<hr/>

</div>

)

}

export default TicketCard