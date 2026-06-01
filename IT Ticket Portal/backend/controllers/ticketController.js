const asyncHandler = require("express-async-handler");

const Ticket = require("../models/ticketModel");

// GET MY TICKETS

const getTickets = asyncHandler(async (req, res) => {

  const tickets = await Ticket.find({
    user: req.user.id,
  });

  res.status(200).json(tickets);

});

// GET ALL TICKETS (ADMIN)

const getAllTickets = asyncHandler(async (req, res) => {

  const tickets = await Ticket.find()
    .populate("user", "name email");

  res.status(200).json(tickets);

});

// CREATE TICKET

const createTicket = asyncHandler(async (req, res) => {

  const {
    title,
    category,
    description,
    priority,
  } = req.body;

  if (
    !title ||
    !category ||
    !description ||
    !priority
  ) {

    res.status(400);

    throw new Error(
      "Please fill all fields"
    );

  }

  const ticket = await Ticket.create({

    user: req.user.id,
    title,
    category,
    description,
    priority,
    status: "Open",

  });

  res.status(201).json(ticket);

});

// UPDATE TICKET

const updateTicket = asyncHandler(async (req, res) => {

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {

    res.status(404);

    throw new Error(
      "Ticket not found"
    );

  }

  if (
    ticket.user.toString() !== req.user.id
  ) {

    res.status(401);

    throw new Error(
      "Not authorized"
    );

  }

  const updatedTicket =
    await Ticket.findByIdAndUpdate(

      req.params.id,
      req.body,
      { new: true }

    );

  res.status(200).json(updatedTicket);

});

// DELETE TICKET

const deleteTicket = asyncHandler(async (req, res) => {

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {

    res.status(404);

    throw new Error(
      "Ticket not found"
    );

  }

  if (
    ticket.user.toString() !== req.user.id
  ) {

    res.status(401);

    throw new Error(
      "Not authorized"
    );

  }

  await ticket.deleteOne();

  res.status(200).json({

    message: "Ticket deleted"

  });

});

module.exports = {

  getTickets,
  getAllTickets,
  createTicket,
  updateTicket,
  deleteTicket,

};