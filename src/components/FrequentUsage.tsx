import React, { useState } from "react";
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";

import'./Components.css'
export interface FrequentUsageProps {
  usage?: string;
  setUsage?: any;
}

const FrequentUsage: React.FC<FrequentUsageProps> = ({ usage, setUsage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState: any) => !prevState);
  const frequency = ["Twice per day", "4 times per day", "Unlimited"];

  return (
    <>
    <div className='agecss'>
     
          <h5>How often will you use public transport?</h5>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              {usage?.length ? usage : "Choose frequency"}
            </DropdownToggle>
            <DropdownMenu>
              {frequency.map((one) => (
                <DropdownItem onClick={(e: any) => setUsage(e.currentTarget.textContent)}>
                  {one}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          </div>
    </>
  );
};

export default FrequentUsage;
