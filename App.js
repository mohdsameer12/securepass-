import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Hero from './pages/Hero';
import Booking from './pages/Booking';
import Pages from './pages/Pages';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/Booking/:selectedOccasion" element={<Booking/>} />
      </Routes>
    </Router>
  );
}

export default App;
