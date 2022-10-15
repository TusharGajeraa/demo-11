import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Player from "./Player";
import Statstics from "./Statstics";
import Events from "./Event";
import Charity from "./Charity";
import Notification from "./Notification";
import Golive from "./Golive";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="Home" element={<Home />} />
      <Route path="Player" element={<Player />} />
      <Route path="Statstics" element={<Statstics />} />
      <Route path="Events" element={<Events />} />
      <Route path="Charity" element={<Charity />} />
      <Route path="Golive" element={<Golive />} />
      <Route path="Notification" element={<Notification />} />
    </Routes>
  );
};

export default App;
