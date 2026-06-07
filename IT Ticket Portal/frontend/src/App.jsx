import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import CreateTicket from "./pages/CreateTicket";

import MyTickets from "./pages/MyTickets";

import PrivateRoute from "./components/PrivateRoute";

import AllTickets from "./pages/AllTickets";

function App() {

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

    <PrivateRoute>

      <Dashboard />

    </PrivateRoute>

  }

/>

<Route

  path="/create-ticket"

  element={

    <PrivateRoute>

      <CreateTicket />

    </PrivateRoute>

  }

/>

<Route

  path="/mytickets"

  element={

    <PrivateRoute>

      <MyTickets />

    </PrivateRoute>

  }

/>

<Route
  path="/alltickets"
  element={<AllTickets />}
/>


      </Routes>

    </BrowserRouter>

  );

}

export default App;