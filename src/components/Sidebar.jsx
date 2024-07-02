import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./sidebar.css";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const handleToggleSubmenu = (tabName) => {
    if (activeTab === tabName) {
      setSubmenuOpen(!submenuOpen);
    } else {
      setActiveTab(tabName);
      setSubmenuOpen(true);
    }
  };

  return (
    <div className={`sideNav ${sidebarOpen ? "" : "sidebar-closed"}`}>
      <aside id="sidebar" className={`sidebar ${sidebarOpen ? "" : "sidebar-closed"}`}>
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${activeTab === "dashboard" ? "active" : ""}`} onClick={() => setActiveTab("dashboard")}>
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${activeTab === "purchase" ? "active" : ""}`} onClick={() => setActiveTab("purchase")}>
              <i className="bi bi-bag-check"></i>
              <span> Sales & Purchase</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${activeTab === "store" ? "active" : ""}`} onClick={() => setActiveTab("store")}>
              <i className="bi bi-shop"></i>
              <span>Store</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AllProduction" id="submenu" className={`nav-link ${activeTab === "production" ? "active" : ""}`} onClick={() => handleToggleSubmenu("production")}>
              <i className="bi bi-card-list"></i>
              <span>Production</span>

            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${activeTab === "quality" ? "active" : ""}`} onClick={() => setActiveTab("quality")}>
              <i className="bi bi-info-circle"></i>
              <span>Quality</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${activeTab === "dispatch" ? "active" : ""}`} onClick={() => setActiveTab("dispatch")}>
              <i className="bi bi-truck"></i>
              <span>Dispatch</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <a href="/" className={`nav-link ${activeTab === "sales" ? "active" : ""}`} onClick={() => setActiveTab("sales")}>
              <i className="bi bi-receipt-cutoff"></i>
              <span>Sales</span>
            </a>
          </li> */}
          <li className="nav-item">
            <Link to="/FinancePage" className={`nav-link ${activeTab === "finance" ? "active" : ""}`} onClick={() => setActiveTab("finance")}>
              <i className="bi bi-currency-rupee"></i>
              <span>Finance</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/HrDashboard" id="submenu" className={`nav-link ${activeTab === "submenu" ? "active" : ""}`} onClick={() => handleToggleSubmenu("submenu")}>
              <i className="bi bi-card-list"></i>
              <span>HR</span>
              <i id="chevron" className={`bi bi-chevron-${submenuOpen ? "up" : "down"}`}></i>
            </Link>
            {activeTab === "submenu" && submenuOpen && (
              <div className={`submenu ${submenuOpen ? "show" : ""}`}>
                <ul>

                  <li>
                    <Link to="./LeavePage">Leave</Link>

                  </li>
                  <li>
                    <Link to="./Attendance">Attendance</Link>
                  </li>
                  <li>
                    <Link to="/Payroll">Payroll Overview</Link>
                  </li>


                </ul>
              </div>
            )}
          </li>
          <li className="nav-item">
            <Link to="/Master" className={`nav-link ${activeTab === "master" ? "active" : ""}`} onClick={() => setActiveTab("master")}>
              <i className="bi bi-person"></i>
              <span>Masters</span>
            </Link>
          </li>
          <hr />
          <li className="nav-item">
            <Link to="/LoginPage" className={`nav-link ${activeTab === "signout" ? "active" : ""}`} onClick={() => setActiveTab("signout")}>
              <i className="bi bi-box-arrow-left"></i>
              <span>Sign Out</span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
