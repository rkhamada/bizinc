import React from "react";

const Q4 = () => {
  return (
    <div style={{ padding: "5rem", textAlign:"start" }}>
      <p>
        <strong className="title">1. Static Page with NEXTJS:</strong>
      </p>
      <a href="https://bizinc-next.vercel.app/" target="_blank" rel="noreferrer">
        https://bizinc-next.vercel.app/
      </a>
      <br /> <br />
      <p>
        <strong className="title">2. What is the difference between `getStaticProps` and `getServerSideProps` in NEXTJS?</strong>
      </p>
      <p>
        "getStaticProps" and "getServerSideProps" are both data-fetching methods in Next.js, but they serve different purposes. <br />
        getStaticProps fetches data at build time, generating static pages that are served to all users, making it ideal for content that doesn't change frequently. <br />
        In contrast, "getServerSideProps" fetches data on every request, rendering the page on the server each time, which is suitable for pages that require up-to-date or personalized content. <br />
        The key difference is when the data is fetched: "getStaticProps" is used for pre-rendering at build time, while "getServerSideProps" handles data fetching at request time.
      </p>
    </div>
  );
};

export default Q4;
