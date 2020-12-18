import logo from "./logo.png";
import "./Sidebar.css";
import { MdMessage, MdSettings, MdNotifications } from "react-icons/md";
import { HiDocument, HiOutlineCalendar } from "react-icons/hi";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <img src={logo} alt="logo" />
      <div className="sidebar__middle-icons">
        <HiDocument size={30} color="#8b8e9d" className="mb-3" />
        <HiOutlineCalendar size={30} color="#8b8e9d" className="mb-3" />
        <MdMessage
          size={30}
          color={
            location.pathname.includes("messenger") ? "#4b68ec" : "#8b8e9d"
          }
          className="mb-3"
        />
        <MdNotifications size={30} color="#8b8e9d" className="mb-3" />
      </div>
      <div className="sidebar__bottom-icons">
        <MdSettings size={30} color="#8b8e9d" />
      </div>
    </div>
  );
};
export default Sidebar;
