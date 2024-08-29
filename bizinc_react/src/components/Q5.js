import React from "react";

const Q5 = () => {
  return (
    <div style={{ padding: "5rem", textAlign:"start" }}>
      <p>
        <strong className="title">1. Basic SQL Queries:</strong>
      </p>
      <p>
        <ol>
          <li>Create:  {`CREATE TABLE users ( id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) UNIQUE NOT NULL );`}</li>
          <li>Insert:  {`INSERT INTO users (name, email) VALUES ('Biz Inc', 'biz.inc@example.com');`}</li>
          <li>Create:  {`SELECT * FROM users;`}</li>
          </ol>
      </p>
      <br /> <br />
      <p>
        <strong className="title">2. What is a primary key in PostgreSQL, and why is it important?</strong>
      </p>
      <p>
        A primary key in PostgreSQL is a unique identifier for each record in a table. <br />
        It ensures that each row in the table can be uniquely identified by one or a combination of columns. <br />
        The primary key is important because it enforces data integrity by preventing duplicate records and enabling efficient indexing, which speeds up data retrieval and ensures that each record can be accessed directly and reliably.
      </p>
    </div>
  );
};

export default Q5;
