import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <SideBarIcon icon={<FaFire size="28" />} text="Home" to="/" />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} text="Form" to="/form" />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text="Volunteer" to="/volunteer" />
      <SideBarIcon icon={<FaPoo size="20" />} text="Poop" to="/poop" />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} text="Settings" to="/settings" />
    </div>
  );
};

const SideBarIcon = ({ icon, text, to }) => (
  <div className="sidebar-icon group">
    <Link to={to}>{icon}</Link>
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
