import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="ball">
      <h1
        className="count"
        onDoubleClick={() => {
          alert("cant edit it");
        }}
      >
        {count}
      </h1>
      <button
        class="increment-button"
        onClick={(event) => {
          setCount(count + 1);
          console.log("button clicked");
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default App;
