import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropdownButton, Dropdown } from "react-bootstrap";

const DropdownCustom = ({ icon, list, name, title, onChange, value }) => (
  <DropdownButton
    id={name}
    title={
      <div className="dropdown-content">
        {value ? "" : <FontAwesomeIcon icon={icon} />}
        <div className="dropdown-text heavy-text">{value ? value : name}</div>
      </div>
    }
    onSelect={eventKey => {
      onChange(prevState => ({
        ...prevState,
        [title]: {
          label: eventKey,
          value: list[eventKey]
        }
      }));
    }}
  >
    {list.map((lists, index) => (
      <Dropdown.Item key={index} eventKey={index} value={lists}>
        {lists}
      </Dropdown.Item>
    ))}
  </DropdownButton>
);

export default DropdownCustom;
