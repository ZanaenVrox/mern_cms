import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="page-title-right">
      <ol className="breadcrumb m-0">
        <li className="breadcrumb-item">
          <Link to="#">{window.history.state?.from}</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li
              key={routeTo}
              className="breadcrumb-item active"
              aria-current="page"
            >
              <Link to="#">{name}</Link>
            </li>
          ) : (
            <li key={routeTo} className="breadcrumb-item">
              <Link to="#">{name}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Breadcrumb;
