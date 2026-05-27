import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateTicket from "./pages/CreateTicket";
import MyTickets from "./pages/MyTickets";

function App() {

const [tickets, setTickets] = useState([]);

return (

<BrowserRouter>

<Navbar />

<Routes>

<Route
path="/"
element={<Home />}
/>

<Route
path="/login"
element={<Login />}
/>

<Route
path="/register"
element={<Register />}
/>

<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
}
/>



<Route
path="/create-ticket"
element={
<ProtectedRoute>

<CreateTicket
tickets={tickets}
setTickets={setTickets}
/>

</ProtectedRoute>
}
/>



<Route
path="/mytickets"
element={
<ProtectedRoute>

<MyTickets
tickets={tickets}
setTickets={setTickets}
/>

</ProtectedRoute>
}

/>



</Routes>

<ToastContainer />

</BrowserRouter>

);

}

export default App;