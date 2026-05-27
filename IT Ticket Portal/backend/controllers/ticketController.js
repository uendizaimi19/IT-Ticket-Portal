const asyncHandler =
require("express-async-handler");

const Ticket =
require("../models/ticketModel");

const getTickets =
asyncHandler(async(req,res)=>{

const tickets =
await Ticket.find();

res.status(200)
.json(tickets);

});

const createTicket =
asyncHandler(async(req,res)=>{

const {

title,
device,
description,
priority

}=req.body;

if(
!title ||
!device ||
!description ||
!priority
){

res.status(400);

throw new Error(
"Please fill all fields"
);

}

const ticket =
await Ticket.create({

title,
device,
description,
priority

});

res.status(201)
.json(ticket);

});

module.exports={

getTickets,
createTicket

};