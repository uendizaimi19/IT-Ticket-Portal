const express = require("express");

const router = express.Router();

const {

  getTickets,
  getAllTickets,
  createTicket,
  updateTicket,
  deleteTicket,

} = require("../controllers/ticketController");

const {
  protect,
} = require("../middleware/authMiddleware");

// ALL TICKETS (ADMIN)

router.get(
  "/all",
  protect,
  getAllTickets
);

// MY TICKETS

router.route("/")

  .get(
    protect,
    getTickets
  )

  .post(
    protect,
    createTicket
  );

// UPDATE / DELETE

router.route("/:id")

  .put(
    protect,
    updateTicket
  )

  .delete(
    protect,
    deleteTicket
  );

module.exports = router;