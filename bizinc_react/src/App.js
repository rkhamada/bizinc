import React, { useState } from "react";
import "./App.css";
import SimpleCounter from "./components/SimpleCounter";

function App() {
  const tabs = [
    "Question 1",
    "Question 2",
    "Question 3"
  ];
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="App">
      <img
        src="/images/bizinc_full.png"
        alt="google logo"
        style={{
          width: "200px",
          placeSelf: "center",
          border: "5px",
          borderColor: "black",
        }}
      />
      <div style={{ width: "80%", maxWidth: "80%", minWidth: "80%" }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            style={{
              padding: "10px 20px",
              margin: "10px",
              fontSize: "20px",
              borderRadius: "10px",
              backgroundColor: "lightblue",
            }}
            onClick={() => handleTab(tab)}
          >
            {tab}
          </button>
        ))}
        {selectedTab === "Question 1" && (
          <div>
            <br />
            <p>
              <strong>1. Coding Challenge: Array Manipulation</strong>
            </p>
            <p>
              {`const input =[1,2,3,4];`} <br />
              {` const ArrManipulation = (arr) => {return arr.map((e)=> e % 2 === 0 ? e * 2 : e)}`}
            </p>
            <br />
            <p>
              <strong>
                2. Conceptual Question: What are the differences between `==`
                and `===` in JavaScript?
              </strong>
            </p>
            <p>
              In JavaScript, both == and === are used to compare values, but
              they differ in how they handle the comparison:
              <br />
              The first is loose equality, which means that JavaScript will try
              to convert the variables to a common type before comparing.
              <br />
              The second is strict equality, which means that JavaScript will
              compare both the value and the type, and will return false if
              either the value or type is different.
              <br />
              For instance, "1" === 1 would return false, but "1" == 1 would
              return true.
            </p>
          </div>
        )}
        {selectedTab === "Question 2" && <SimpleCounter />}
        {selectedTab === "Question 3" && (
          <>
            <p>http://localhost:3333/message</p>
            <p>
              <strong>2. How NodeJS Handles Asynchronous Operations:</strong>
            </p>
            <br />
            <p>
              NodeJS handles asynchronous operations using an event-driven, non-blocking I/O model. <br />
              This means that instead of waiting for operations like file reading, network requests, or database queries to complete, NodeJS will continue executing the rest of the code. <br />
              When the asynchronous operation is done, a callback function or a promise will be triggered to handle the result.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
