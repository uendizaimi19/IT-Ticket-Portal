const express = require("express");
const router = express.Router();

const {
  getTickets,
  createTicket,
  updateTicket,
  deleteTicket,
  getAllTickets,
  updateTicketStatus,
} = require("../controllers/ticketController");

const { protect } = require("../middleware/authMiddleware");

// ALL TICKETS (ADMIN)
router.get("/all", protect, getAllTickets);

// ✅ MUST be before /:id or "status" gets treated as an id
router.put("/status/:id", protect, updateTicketStatus);
    
// MY TICKETS
router.route("/")
  .get(protect, getTickets)
  .post(protect, createTicket);

// UPDATE / DELETE (USER)
router.route("/:id")
  .put(protect, updateTicket)
  .delete(protect, deleteTicket);

module.exports = router;