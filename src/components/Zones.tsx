import React, { useState } from "react";
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import './Components.css'

export interface ZonesProps {
  zone?: string;
  setZone?: any;
  setConfirm?: any;
}

const Zones: React.FC<ZonesProps> = ({ zone, setZone, setConfirm }) => {
  // const [zone, setZone] = useState("");

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState: any) => !prevState);
  const zoneGroups = ["AB", "BC", "ABC"];
  return (
    
    <div className='agecss'>
        <h5>What zones will you be transporting through? </h5>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>{zone?.length ? zone : "Choose zone"}</DropdownToggle>
          <DropdownMenu>
            {zoneGroups.map((one) => (
              <DropdownItem
                onClick={(e: any) => {
                  setZone(e.currentTarget.textContent);
                  setConfirm(true);
                }}
              >
                {one}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        </div>
  );
};

export default Zones;
