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
export interface AgeProps {
  age?: string;
  setAge?: any;
}


const Age: React.FC<AgeProps> = ({ age, setAge }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const ageGroup = ["0-4", "4-12", "12-60", "60+"];

  const toggle = () => setDropdownOpen((prevState: any) => !prevState);

  return (
    <>
    <div className='agecss'>
          <h5>First we would like to know your age</h5>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>{age?.length ? age : "Choose age"}</DropdownToggle>
            <DropdownMenu>
              {ageGroup.map((one) => (
                <DropdownItem onClick={(e: any) => setAge(e.currentTarget.textContent)}>
                  {one}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
      </div>
    </>
    
  );
  
};


export default Age;
