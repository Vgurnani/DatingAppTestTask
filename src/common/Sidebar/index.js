import React from "react";
import PropTypes from "prop-types";
import history from "utils/history";
import "./style.css";

const Sidebar = props => {
  let sidebarOptions = [
    { name: "Dashboard", iconImage: "/", redirectionPath: "/dashboard" },
    { name: "Members", iconImage: "/", redirectionPath: "/members" }
  ];
  return (
    <div
      style={{
        height: "400px",
        width: "150px",
        border: "1px solid black",
        float: "left"
      }}
    >
      <ul style={{ listStyleType: "none" }}>
        {sidebarOptions.map(data => {
          return (
            <li
              className={
                window.location.pathname == data.redirectionPath
                  ? "activeOption"
                  : ""
              }
              style={{ cursor: "pointer" }}
              onClick={() => history.push(data.redirectionPath)}
            >
              {data.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  showBackground: PropTypes.bool
};

export default Sidebar;
