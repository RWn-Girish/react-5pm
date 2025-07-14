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
import { Route, Routes } from "react-router";
import Header from "./Components/Header";

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
      <Header />
      <Routes>
        <Route path="/" element={<Counter name="Jolly Peter" email="jolly@test.in" />} />
        <Route path="/about/:name" element={<Events />} />
        <Route path="/contact"  element={<h1>Contact Page</h1>}/>
        <Route path="/service" element={<h1>Service Page</h1>} />
        <Route path="/*" element={<h1>Page Not Found</h1>} />
      </Routes>
    <h1>Footer Section</h1>
      {/* 
      
      <StaticList listItems={listItems} />
      <DynamicList listItems={listItems} /> */}
      {/* <ControlledComp /> */}
      {/* <UnControlledComp /> */}
      {/* <ValidationComp /> */}
      {/* <HOCComp isLoading={isLoading} /> */}

      
    </Fragment>
  );
}

export default App;
