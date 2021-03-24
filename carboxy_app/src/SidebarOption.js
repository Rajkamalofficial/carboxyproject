import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <div class="sidebaroptioncontainer">
      <Icon />
      <h2>{text}</h2>
      </div>
    </div>
  );
}

export default SidebarOption;
