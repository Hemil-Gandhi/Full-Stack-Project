import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./react";
import About from ".components/About";
import Feedback from ".components/Feedback";
import TableBooking from "./components/TableBooking";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/tableBooking" element={<TableBooking />} />
    </Routes>
  </Router>
);

export default AppRouter;
