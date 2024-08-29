import React, { useState } from "react";
import "./App.css";
import SimpleCounter from "./components/SimpleCounter";
import Q3 from "./components/Q3";
import Q4 from "./components/Q4";
import Q5 from "./components/Q5";
import Q6 from "./components/Q6";
import Q7 from "./components/Q7";

function App() {
  const tabs = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7"];
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
      <div style={{ width: "80%", maxWidth: "80%", minWidth: "80%", display: "flex", flexDirection: "column", flexGrow: 1, height: "100%" }}>
        <div>
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
        </div>
        {selectedTab === "Question 1" && (
          <div style={{ padding: "5rem", textAlign: "start" }}>
            <br />
            <p>
              <strong className="title">1. Array Manipulation</strong>
            </p>
            <p>
              {`const input =[1,2,3,4];`} <br />
              {` const ArrManipulation = (arr) => {return arr.map((e)=> e % 2 === 0 ? e * 2 : e)}`}
            </p>
            <br />
            <p>
              <strong className="title">2. What are the differences between `==` and `===` in JavaScript?</strong>
            </p>
            <p>
              In JavaScript, both == and === are used to compare values, but they differ in how they handle the comparison:
              <br />
              The first is loose equality, which means that JavaScript will try to convert the variables to a common type before comparing.
              <br />
              The second is strict equality, which means that JavaScript will compare both the value and the type, and will return false if either the value or type is different.
              <br />
              For instance, "1" === 1 would return false, but "1" == 1 would return true.
            </p>
          </div>
        )}
        {selectedTab === "Question 2" && <SimpleCounter />}
        {selectedTab === "Question 3" && <Q3 />}
        {selectedTab === "Question 4" && <Q4 />}
        {selectedTab === "Question 5" && <Q5 />}
        {selectedTab === "Question 6" && <Q6 />}
        {selectedTab === "Question 7" && <Q7 />}
      </div>
    </div>
  );
}

export default App;
