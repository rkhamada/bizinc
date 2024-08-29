import React from "react";

const Q3 = () => {
  return (
    <div style={{ padding: "5rem", textAlign:"start" }}>
      <p>
        <strong className="title">1. API ENDPOINT:</strong>
      </p>
      <a href="https://bizinc-express.vercel.app/message" target="_blank" rel="noreferrer">
        https://bizinc-express.vercel.app/message
      </a>
      <br /> <br />
      <p>
        <strong className="title">2. How NodeJS Handles Asynchronous Operations:</strong>
      </p>
      <p>
        NodeJS handles asynchronous operations using an event-driven, non-blocking I/O model. <br />
        This means that instead of waiting for operations like file reading, network requests, or database queries to complete, NodeJS will continue executing the rest of the code. <br />
        When the asynchronous operation is done, a callback function or a promise will be triggered to handle the result.
      </p>
    </div>
  );
};

export default Q3;
