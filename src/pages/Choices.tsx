import React from "react";
import { Row } from "reactstrap";
import './../components/Components.css'
export interface ChoicesProps {
  age?: string;
  duration?: string;
  usage?: string;
  zone?: string;
  friends?: string;
}

const Choices: React.FC<ChoicesProps> = ({ age, duration, usage, zone, friends }) => {
  const calculation = (duration?: string, usage?: string) => {
    if (usage === "Unlimited" || usage === "4 times per day") {
      if (duration === "Weekend")  {
        return (
          <div className='decision'>
            <h4>Buy daily tickets</h4>
          </div>
            
          
        );
      } else {
        return (
          <div className='decision'>
            <h4>Buy Weekly Tickets</h4>
          </div>
        );
      }
    } else {
      if (duration === "Weekend") {
        return (
          <div className='decision'>
            <h4>Buy 4 Single Tickets</h4>
          </div>
        );
      } else {
        return (
          <div className='decision'>
            <h4>Buy Weekly Tickets</h4>
          </div>
        );
      }
    }
  };
  return (
    <>
  <div>
  <div className="container">
    <div className="row">
    <div className="col"><h6>First we would like to know your age</h6>
    <h5>{age}</h5>
    </div>
    <div className="col"><h6>How Long will you stay in Berlin?</h6>
      <h5>{duration}</h5></div>
    <div className="w-100"></div>
    <div className="col"><h6>How often will you use public transport?</h6>
      <h5>{usage}</h5></div>
    <div className="col"><h6>What zones will you be transporting through?</h6>
      <h5>{zone}</h5></div>
  </div>
  </div>
      
      <div><a href="https://www.bvg.de/en/Tickets/Other-ways-to-buy/Ticket-App"> {calculation(duration, usage)}</a>  </div>
      
  </div>
    </>
  );
};

export default Choices;
