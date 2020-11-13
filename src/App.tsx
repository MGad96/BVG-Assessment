import React, { FC, useState } from "react";
import { Input, Row, Col, Container, Button, Card } from "reactstrap";
import Questions from "./pages/Questions";
import './App.css'

const App: FC = () => {
  const [name, setName] = useState("");
  const [next, setNext] = useState(false);
  return (
  <div className='App'>
    <Container >
      <Row
        style={{ height: "80vh" }}
        className="d-flex justify-content-center  align-items-center"
      >
        {next && name && (
          <>
          <h5 id='titlename'>
            Hi {name}, thanks for using our app, hope we can help you have a good time in
            Berlin
          </h5> 
          <Questions name={name}/>
          </>
        )}
        {!next && (
          <Col xs={5}>
            <Row className="d-flex justify-content-center">
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Please input your name"
                name="name"
                // className="= mt-5"
              />
              <Button
                style={{ marginTop: 20, width: "30%" }}
                onClick={() => (name.length ? setNext(!next) : null)}
              >
                Next
              </Button>
              <style>{`
          .myInput:focus {
            outline: none;
          }
          `}</style>
            </Row>
          </Col>
        )}
        
        {/* {next  && (<Questions name={name}/>) } */}
      </Row>
    </Container>
    </div>
  );
};

export default App;

