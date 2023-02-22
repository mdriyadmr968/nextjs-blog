import Link from "next/link";
import Head from "next/head";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useState } from "react";
const index = ({ posts }) => {
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <Head>
        <title>Home Page </title>
        <meta name="description" content="Free Web youtube tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="thapa technical" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <div style={{ width: "60%", margin: "auto" }}>
        <div>
          <h1 style={{ textAlign: "center" }}>Welcome to Gatsby Blog</h1>

          {posts.map((post) => (
            <div key={post.postId}>
              <h1>{post.title}</h1>
              <div
                style={{ marginBottom: "5%" }}
                dangerouslySetInnerHTML={{
                  __html: post?.description.slice(0, 200),
                }}
              />
              <Link
                href={`/${post.postId}`}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  textDecoration: "none",
                  padding: "2%",
                  borderRadius: "5%",
                  display: "block",
                  width: "150px",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const headers = {
    "Content-Type": "application/json",
    "x-app-token": "E9FE46D9-FC93-480F-9DC6-D26F7DE243A0",
  };

  const res = await fetch(
    "https://ms-testnet.api.onnftverse.com/v1/marketplace/0/blog/post/list?type=TUTORIAL",
    {
      headers,
    }
  );
  const data = await res.json();

  return {
    props: {
      posts: data.content,
    },
  };
};
