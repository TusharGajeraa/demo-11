import "./sidebar.css";
import HouseIcon from "@mui/icons-material/House";
import PeopleIcon from "@mui/icons-material/People";
import PollIcon from "@mui/icons-material/Poll";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <img
            src="https://admin.knowitallquiz.co.uk/static/media/knowitallfont.c5d4cdc40cc8d16964a7.png"
            width="60px"
            height="40px"
            me="10px"
          ></img>
        </span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <HouseIcon className="IconDesign" />
            <Link to="/Home" className="design">
              Dashboard
            </Link>
          </li>
          <li>
            <PeopleIcon className="IconPattern" />
            <Link to="/Player" className="design">
              Players
            </Link>
          </li>

          <li>
            <PollIcon />
            <Link to="/Statstics" className="design">
              Statstics
            </Link>
          </li>
          <li>
            <FeaturedVideoIcon />
            <Link to="/Charity" className="design">
              Charity
            </Link>
          </li>
          <li>
            <FileCopyIcon />
            <Link to="/Events" className="design">
              Events
            </Link>
          </li>
          <li>
            <LiveTvIcon />
            <Link to="/Golive" className="design">
              Go Live
            </Link>
          </li>
          <li>
            <NotificationsIcon />
            <Link to="/Notification" className="design">
              Notification
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
