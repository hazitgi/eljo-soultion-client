import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { FiMenu } from "react-icons/fi";
import Dropdown from "react-bootstrap/Dropdown";
import userIcon from "../../../assets/images/user.png";
import { AiOutlinePoweroff } from "react-icons/ai";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/redcuers/user.reducer";
import toast from "react-hot-toast";
function Header({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.classList.add("sidebar_open");
    } else {
      document.body.classList.remove("sidebar_open");
    }
  };
  const mobiletogglebar = () => {
    document.body.classList.add("sidebar_open");
    document.getElementById("layouts_menu").classList.add("lay_overlay");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    dispatch(logoutUser());
    toast.success("Logged out success");
    navigate("/auth/login");
  };
  const dropdownRef = useRef(null);
  const { user } = useSelector((state) => state.user);
  const handleToggle = () => setShowDropdown(!showDropdown);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="header_container">
      <div className="">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-3 col-sm-12 pr_padding_not_right mobile_header_20">
            <div className="search_with_bar">
              <div className="sidenav_icon desktop" onClick={toggleSidebar}>
                <FiMenu />
              </div>
              <div className="sidenav_icon mobile" onClick={mobiletogglebar}>
                <FiMenu />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mobile_header_60"></div>
          <div className="col-lg-3 col-md-3 col-sm-12 text-right mobile_header_20">
            <div className="align_head_parts">
              <div ref={dropdownRef} className="">
                <Dropdown show={showDropdown} onToggle={handleToggle}>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="btn btn-secondary"
                    onClick={handleToggle}
                  >
                    <img src={userIcon} alt="" className="users_img" />
                    <span id="hide_user_name">
                      <span className="user_name">{user?.name}</span>
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu id="header_dropdown">
                    <div className="profile_name">{user?.name}</div>
                    <div className="location_address">
                      <div className="location_icon">
                        <RiShieldKeyholeLine />
                      </div>
                      <div>
                        {user?.role == "admin" ? "Admin User" : "Employee User"}
                      </div>
                    </div>
                    <hr className="margin_hr" />
                    <div className="profile_page_list">
                      <div
                        className="inner_pages_list"
                        onClick={() => {
                          setShowDropdown(false);
                          handleLogout();
                        }}
                      >
                        <div className="main_menu_icon text-danger">
                          <AiOutlinePoweroff />
                        </div>
                        <div className="main_menu_name my_prof text-danger">
                          Logout
                        </div>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
