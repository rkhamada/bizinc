import fs from "fs";
import path from "path";
import Image from "next/image";

export default async function Home() {
  const filePath = path.join(process.cwd(), "public/data", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const items = JSON.parse(jsonData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src="/images/bizinc_full.png" alt="Next.js Logo" width={180} height={37} priority />
      </div>

      <div className="absolute bottom-1/2">
        <h2 className="text-2xl font-semibold mb-4">Items fetched</h2>
        <ul className="flex gap-5">
          {items.map((item) => (
            <li key={item.id}>{item.name} </li>
          ))}
        </ul>
      </div>
      <div>
        <br />
        <p>
          <strong style={{fontSize:"30px"}}>4. What is the difference between `getStaticProps` and `getServerSideProps` in Next.js?</strong>
        </p>
        <p>
          getStaticProps is used to generate static pages at build time. The data is fetched once when the page is built and then served to all visitors.
          <br />
          getServerSideProps is used to fetch data on each request. The page is rendered on the server each time it's requested, allowing for dynamic content that changes on each visit.
        </p>
        <br />
      </div>
    </main>
  );
}
