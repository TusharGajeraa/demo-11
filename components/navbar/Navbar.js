import "./navbar.css";
import PersonIcon from "@mui/icons-material/Person";
const Navbar = () => {
  return (
    <div className="navbar">           
      <div className="wrapper">
        <b>Dashboard</b>
        <PersonIcon style={{ marginLeft: "770px" }} />{" "}
        <h4 style={{ marginLeft: "5px" }}> admin </h4>
      </div>
    </div>
  );
};

export default Navbar;
