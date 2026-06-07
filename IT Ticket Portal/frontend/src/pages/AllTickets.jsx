import { useEffect, useState } from "react";
import axios from "axios";

function AllTickets() {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      const response = await axios.get(
        "http://localhost:8000/api/tickets/all",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setTickets(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const updateTicketStatus = async (ticketId, newStatus) => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
console.log("UPDATING:", ticketId, newStatus);

console.log("SUCCESS");
      await axios.put(
        `http://localhost:8000/api/tickets/status/${ticketId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      // ✅ setTickets is now INSIDE the try block, after the await
      setTickets((prev) =>
        prev.map((ticket) =>
          ticket._id === ticketId
            ? { ...ticket, status: newStatus }
            : ticket
        )
      );

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">All Tickets</h1>

      <div className="admin-ticket-grid">
        {tickets.map((ticket) => (
          <div key={ticket._id} className="admin-ticket-card">
            <div className="ticket-header">
              <h3>{ticket.title}</h3>
              <span className={`priority-badge ${ticket.priority?.toLowerCase()}`}>
                {ticket.priority}
              </span>
            </div>

            <div className="ticket-body">
              <p>👤 <strong>User:</strong> {ticket.user?.name || "Unknown"}</p>
              <p>📧 <strong>Email:</strong> {ticket.user?.email || "Unknown"}</p>
              <p>🏷️ <strong>Category:</strong> {ticket.category}</p>

              <p>📌 <strong>Status:</strong></p>
              <select
                className="select"
                value={ticket.status}
                onChange={(e) => updateTicketStatus(ticket._id, e.target.value)}
              >
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTickets;