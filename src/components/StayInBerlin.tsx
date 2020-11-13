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
// import FrequentUsage from "./FrequentUsage";
// import FriendsInBerlin from "./FriendsInBerlin";

export interface StayInBerlinProps {
  duration?: string;
  setDuration?: any;
}

const StayInBerlin: React.FC<StayInBerlinProps> = ({ duration, setDuration }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [duration, setDuration] = useState("");

  const stayGroup = ["Weekend", "1 Week", "2 Weeks", "1 Month"];

  const toggle = () => setDropdownOpen((prevState: any) => !prevState);

  return (
    <>
    <div className='agecss'>
          <h5>How Long will you stay in Berlin?</h5>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              {duration?.length ? duration : "Choose duration"}
            </DropdownToggle>
            <DropdownMenu>
              {stayGroup.map((one) => (
                <DropdownItem
                  onClick={(e: any) => setDuration(e.currentTarget.textContent)}
                >
                  {one}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          </div>
    </>
  );
};

export default StayInBerlin;
