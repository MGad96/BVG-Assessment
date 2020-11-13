import React, { useState } from "react";
import Age from "../components/Age";
import FrequentUsage from "../components/FrequentUsage";
import FriendsInBerlin from "../components/FriendsInBerlin";
import StayInBerlin from "../components/StayInBerlin";
import Zones from "../components/Zones";
import Choices from "./Choices";
import './../components/Components.css'

export interface QuestionProps {
  name?: string;
}

const Question: React.FC<QuestionProps> = ({ name }): any => {
  const [duration, setDuration] = useState("");
  const [zone, setZone] = useState("");
  const [friends, setFriends] = useState("");
  const [age, setAge] = useState("");
  const [usage, setUsage] = useState("");
  const [confirm, setConfirm] = useState(false);

  if (confirm) {
    return (
      <Choices
        duration={duration}
        zone={zone}
        friends={friends}
        age={age}
        usage={usage}
      />
    );
  }

  if (!age.length) {
    return <Age age={age} setAge={setAge} />;
  } else if (age === "0-4") {
    return <div className='decision'><h5>Lucky you! Dont have to pay for transportation.</h5></div>;
  } else {
    if (!duration.length) {
      return <StayInBerlin duration={duration} setDuration={setDuration} />;
    } else if (duration === "1 Month") {
        return <h1>You can buy monthly ticket </h1>;
      } else if (duration === "Weekend") {
      if (!friends.length) {
        return <FriendsInBerlin friends={friends} setFriends={setFriends} />;
      } else if (friends === "yes") {
        return <div className='agecss'><h5>You can ride with your friends</h5> </div>;
      } else {
        if (!usage.length) {
          return <FrequentUsage usage={usage} setUsage={setUsage} />;
        } else {
          return <Zones setConfirm={setConfirm} zone={zone} setZone={setZone} />;
        }
      }
    } else {
      if (!usage.length) {
        return <FrequentUsage usage={usage} setUsage={setUsage} />;
      } else {
        return <Zones setConfirm={setConfirm} zone={zone} setZone={setZone} />;
      }
    }
  }
};


export default Question;
