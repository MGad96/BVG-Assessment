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
export interface FriendsInBerlinProps {
  // age?: string;
  // duration?: string;
  friends?: string;
  setFriends?: any;
}

const FriendsInBerlin: React.FC<FriendsInBerlinProps> = ({ friends, setFriends }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState: any) => !prevState);
  // const [friends, setFriends] = useState("");

  const stayGroup = ["yes", "no"];
  // if (!friends?.length) {
  return (
    <>
    <div className='agecss'>
          <h5>Do you have friends in Berlin?</h5>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>{friends?.length ? friends : "Yes/No"}</DropdownToggle>
            <DropdownMenu>
              {stayGroup.map((one) => (
                <DropdownItem
                  onClick={(e: any) => setFriends(e.currentTarget.textContent)}
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

export default FriendsInBerlin;
