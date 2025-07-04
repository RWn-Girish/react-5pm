import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Events from "./Components/Events";
import StaticList from "./Components/StaticList";
import DynamicList from "./Components/DynamicList";
import ControlledComp from "./Components/Controlled";
import UnControlledComp from "./Components/Uncontrolled";
import ValidationComp from "./Components/Validation";
import HOCCOMP from "./Components/HOC";
import { Accordion, Button, Card, Row } from "react-bootstrap";

const HOCComp = HOCCOMP(ValidationComp);

function App() {
  const [listItems, setListItems] = useState([
    "Home",
    "About",
    "Service",
    "Contact",
    "Blogs",
    "Our Story",
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <Fragment>
      {/* <Counter name="Jolly Peter" email="jolly@test.in" /> */}
      {/* <Events /> */}
      {/* <StaticList listItems={listItems} />
      <DynamicList listItems={listItems} /> */}
      {/* <ControlledComp /> */}
      {/* <UnControlledComp /> */}
      {/* <ValidationComp /> */}
      {/* <HOCComp isLoading={isLoading} /> */}

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="container mt-5">
        <Row className="d-flex">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </Fragment>
  );
}

export default App;
