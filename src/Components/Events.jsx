import { useState } from "react";
import { useParams } from "react-router";

const Events = () => {
  const { name } = useParams()

  const [count, setCount] = useState(0);
  const handleClick = (name) => {
    console.log("Click Here...  => ", name);
    setCount(count + 1);
  };
  const handleMouseEnter = () => {
    console.log("Mouse Enter....");
  };
  const handleReset = () => {
    setCount(0);
  };

  const handleMouseLeave = () => {
    console.log("Mouse Leave ☢☢☢....");
  };

  return (
    <div>
      <h2
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={handleMouseLeave}
      >
        On Mouse Over and Leave Event  {name}
      </h2>
      {count > 0 ? (
        <ul>
          <li>Hello</li>
          <li>World</li>
          <li>Red</li>
          <li>White</li>
        </ul>
      ) : (
        <p>Count is Zero</p>
      )}
      <button
        style={{ color: count > 0 ? "blue" : "red" }}
        onClick={() => handleClick("John Peter")}
      >
        Click
      </button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
};

export default Events;

// Conditional Rendering => ternory operator (condition ? true : false)
