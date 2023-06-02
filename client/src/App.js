/** @format */
import Detail from "./pages/DetailTour";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import IncomeTrip from "./pages/IncomeTrip";
import Income from "./pages/Income";
import AddTrip from "./pages/AddTrip";
import Payment from "./pages/Payment";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AddTrip" element={<AddTrip />} />
        <Route path="/IncomeTrip" element={<IncomeTrip />} />
        <Route path="/Income" element={<Income />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </>
  );
}
export default App;
