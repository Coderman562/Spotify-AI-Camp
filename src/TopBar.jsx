import { useLocation } from "react-router-dom";
import "./TopBar.css";

function TopBar() {
  const location = useLocation();
  const currentPage = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/form":
        return "Form";
      case "/volunteer":
        return "Volunteer";
      default:
        return "";
    }
  };

  return (
    <header className="topbar">
      <h1 className="topbar-title">{currentPage()}</h1>
    </header>
  );
};

export default TopBar;
