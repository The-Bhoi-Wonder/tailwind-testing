
import { getSortedPostsData } from "./posts";
import Head from "next/head";
import { GetStaticProps } from "next";

export async function getStaticProps() {
  console.log("called GSP")
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}



export default function Posts({ allPostsData }) {
  console.log("running Posts");
  console.log(allPostsData);
  return (
    <div>
      <Head>
        <title>Nothing</title>
      </Head>
      <section className="">
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

        <div  className="border-green-500 h-fit">
          <ul className="heading-lg">Blog
          {allPostsData?.map(({ id, date, title }) => (
            <li className="list-none" key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
