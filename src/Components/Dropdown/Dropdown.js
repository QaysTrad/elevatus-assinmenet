import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropdownButton, Dropdown } from "react-bootstrap";

const DropdownCustom = ({ icon, list, name }) => (
  <DropdownButton
    title={
      <div className="dropdown-content">
        <FontAwesomeIcon icon={icon} />
        <div className="dropdown-text heavy-text">{name}</div>
      </div>
    }
  >
    {list.map((lists, index) => (
      <Dropdown.Item key={index} eventKey={index}>
        {lists}
      </Dropdown.Item>
    ))}
    <Dropdown.Divider />
  </DropdownButton>
);

export default DropdownCustom;
