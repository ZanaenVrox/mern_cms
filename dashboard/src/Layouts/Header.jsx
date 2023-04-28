import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { notifySuccess } from "../utils/toast";

const Header = (props) => {
  const { handleChange } = props;
  const [adminInfo, setAdminInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const AdminData = JSON.parse(secureLocalStorage.getItem("adminInfo"));
    setAdminInfo(AdminData);
  }, []);

  const Logout = (e) => {
    e.preventDefault();
    secureLocalStorage.removeItem("adminInfo");
    navigate("/");
    notifySuccess("User Loged Out");
  };

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            {/* LOGO */}
            <div className="navbar-brand-box">
              <Link to="index.html" className="logo logo-dark">
                <span className="logo-sm">
                  <img src="/assets/images/logo-sm.png" alt="" height={22} />
                </span>
                <span className="logo-lg">
                  <img src="/assets/images/logo-dark.png" alt="" height={20} />
                </span>
              </Link>
              <Link to="index.html" className="logo logo-light">
                <span className="logo-sm">
                  <img src="/assets/images/logo-sm.png" alt="" height={22} />
                </span>
                <span className="logo-lg">
                  <img src="/assets/images/logo-light.png" alt="" height={20} />
                </span>
              </Link>
            </div>
            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
              onClick={handleChange}
            >
              <i className="fa fa-fw fa-bars" />
            </button>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="uil-search" />
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Notifications */}
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="mdi mdi-bell-outline" />
                <span className="badge bg-danger rounded-pill">3</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="m-0 font-size-16"> Notifications </h5>
                    </div>
                    <div className="col-auto">
                      <Link to="#!" className="small">
                        Mark all as read
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-simplebar="init" style={{ maxHeight: 230 }}>
                  <div className="simplebar-wrapper" style={{ margin: 0 }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                      <div className="simplebar-height-auto-observer" />
                    </div>
                    <div className="simplebar-mask">
                      <div
                        className="simplebar-offset"
                        style={{ right: 0, bottom: 0 }}
                      >
                        <div
                          className="simplebar-content-wrapper"
                          style={{ height: "auto", overflow: "hidden" }}
                        >
                          <div
                            className="simplebar-content"
                            style={{ padding: 0 }}
                          >
                            <Link
                              to="#"
                              className="text-reset notification-item"
                            >
                              <div className="d-flex align-items-start">
                                <div className="flex-shrink-0 me-3">
                                  <div className="avatar-xs">
                                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                                      <i className="uil-shopping-basket" />
                                    </span>
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h6 className="mb-1">Your order is placed</h6>
                                  <div className="font-size-12 text-muted">
                                    <p className="mb-1">
                                      If several languages coalesce the grammar
                                    </p>
                                    <p className="mb-0">
                                      <i className="mdi mdi-clock-outline" /> 3
                                      min ago
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="simplebar-placeholder"
                      style={{ width: 0, height: 0 }}
                    />
                  </div>
                  <div
                    className="simplebar-track simplebar-horizontal"
                    style={{ visibility: "hidden" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        display: "none",
                      }}
                    />
                  </div>
                  <div
                    className="simplebar-track simplebar-vertical"
                    style={{ visibility: "hidden" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        display: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="p-2 border-top">
                  <div className="d-grid">
                    <Link
                      className="btn btn-sm btn-link font-size-14 text-center"
                      to="#"
                    >
                      <i className="uil-arrow-circle-right me-1" /> View More..
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {adminInfo?.image !== null ? (
                  <img
                    className="rounded-circle header-profile-user"
                    src={
                      process.env.REACT_APP_API_BASE_IMAGE_URL +
                      adminInfo?.image
                    }
                    alt={adminInfo?.image}
                    crossorigin="anonymous"
                  />
                ) : (
                  <img
                    className="rounded-circle header-profile-user"
                    src="/assets/images/users/placeholder.png"
                    alt={adminInfo?.name}
                  />
                )}
                <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">
                  {adminInfo?.name}
                </span>
                <i className="uil-angle-down d-none d-xl-inline-block font-size-15" />
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <Link className="dropdown-item" to="/change_password">
                  <i className="uil uil-lock-alt font-size-18 align-middle me-1 text-muted" />
                  <span className="align-middle">Change Password</span>
                </Link>
                <Link className="dropdown-item" to="/lock_screen">
                  <i className="uil uil-lock-alt font-size-18 align-middle me-1 text-muted" />
                  <span className="align-middle">Lock screen</span>
                </Link>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={(e) => Logout(e)}
                >
                  <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted" />
                  <span className="align-middle">Sign out</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
