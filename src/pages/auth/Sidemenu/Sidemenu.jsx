import React, { useState, useEffect } from "react";
import "./Sidemenu.css";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import Accordion from "react-bootstrap/Accordion";
import logo from "../../../assets/images/logo/bri/br_logo.png";
import mobilelogo from "../../../assets/images/logo/bri/bri_mobile.png";
import Transaction from "../MenuIcons/Transactions";
import QcList from "../MenuIcons/Qc";
import Listcircle from "../MenuIcons/Listcircle";
import { FolderKanban, ListOrdered, Users } from "lucide-react";

function Sidemenu() {
  const location = useLocation();
  const [activeAccordions, setActiveAccordions] = useState({
    qc: "",
    transaction: "",
  });

  const navigate = useNavigate();
  const closemobiletogglebar = () => {
    document.body.classList.remove("sidebar_open");
    document.getElementById("layouts_menu").classList.remove("lay_overlay");
  };

  useEffect(() => {
    const path = location.pathname;
    const isQcPath = path.startsWith("/qc");
    setActiveAccordions({
      qc: isQcPath ? "0" : "",
      transaction: isQcPath ? "0" : "",
    });
  }, [location.pathname]);

  const toggleAccordion = (key) => {
    setActiveAccordions((prevState) => ({
      ...prevState,
      [key]: prevState[key] === "0" ? "" : "0",
    }));
  };

  return (
    <div id="layouts_menu">
      <div className="main_sidemenu">
        <div className="sidemenu_logo">
          <div className="pos-rel">
            <img src={logo} alt="logo" className="sidebaropenlogo" />
            <img
              src={mobilelogo}
              alt="mobilelogo"
              className="sidebarcloselogo"
            />
            <div className="close_sidemenu" onClick={closemobiletogglebar}>
              <LiaTimesSolid />
            </div>
          </div>
        </div>
        <div className="list_main_menu">
          <ul className="main_main_ul_list">
            <li
              className={`big_left_menu ${
                activeAccordions.transaction ? "active" : ""
              }`}
            >
              <div
                onClick={() => navigate("/employees")}
                className="menus inner_page_list "
                id="menuItem"
              >
                <div className="main_menu_icon">
                  <Users />
                </div>
                <div className="main_menu_name">Employees</div>
              </div>
              <div className="menus inner_page_list "  onClick={() => navigate("/orders")} id="menuItem">
                <div className="main_menu_icon">
                  <ListOrdered />
                </div>
                <div className="main_menu_name">Orders</div>
              </div>
              <div className="menus inner_page_list " id="menuItem"  onClick={() => navigate("/projects")}>
                <div className="main_menu_icon">
                  <FolderKanban />
                </div>
                <div className="main_menu_name">Projects</div>
              </div>
              
              <Accordion activeKey={activeAccordions.transaction}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header
                    onClick={() => toggleAccordion("transaction")}
                  >
                    <div className="inner_page_list">
                      <div className="main_menu_icon">
                        <Transaction />
                      </div>
                      <div className="main_menu_name">Transactions</div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion
                      className="left_right_no_padding sub_category"
                      activeKey={activeAccordions.qc}
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header onClick={() => toggleAccordion("qc")}>
                          <div className="inner_page_list">
                            <div className="main_menu_icon transaction">
                              <QcList />
                            </div>
                            <div className="main_menu_name">QC</div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavLink
                            to="/qc/qualitychecklist"
                            activeclassname="active"
                            className={`page_list accordion ${
                              location.pathname === "/qc/qcmodule" ||
                              location.pathname === "/qc/add-qc-module"
                                ? "active"
                                : ""
                            }`}
                            onClick={closemobiletogglebar}
                          >
                            <div className="inner_page_list submenus_category">
                              <div className="main_menu_icon bullets">
                                <Listcircle />
                              </div>
                              <div className="main_menu_name">List</div>
                            </div>
                          </NavLink>
                          <NavLink
                            to="/qc/completedqualitychecklist"
                            activeclassname="active"
                            className={`page_list accordion ${
                              location.pathname === "/qc/qcmodulecompleted"
                                ? "active"
                                : ""
                            }`}
                            onClick={closemobiletogglebar}
                          >
                            <div className="inner_page_list submenus_category">
                              <div className="main_menu_icon bullets">
                                <Listcircle />
                              </div>
                              <div className="main_menu_name">Completed</div>
                            </div>
                          </NavLink>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidemenu;
