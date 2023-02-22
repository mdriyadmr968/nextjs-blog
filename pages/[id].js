import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Head from "next/head";

const id = ({ post }) => {
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <div style={{ width: "60%", margin: "auto", paddingTop: "5%" }}>
        <Head>
          <title>{post.title} </title>
          <meta name="category" content={post.category} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Head>
        <div>
          <Link
            href="/"
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              textDecoration: "none",
              padding: "2%",
              borderRadius: "5%",
            }}
          >
            Home
          </Link>
          <h1 style={{ marginTop: "2%" }}>Title: {post?.title}</h1>
          <h3>Category: {post?.category}</h3>
          <h1>Description</h1>

          <div dangerouslySetInnerHTML={{ __html: post?.description }} />
        </div>
      </div>
    </div>
  );
};

export default id;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
      { params: { id: "7" } },
      { params: { id: "8" } },
      { params: { id: "9" } },
      { params: { id: "10" } },
      { params: { id: "11" } },
      { params: { id: "12" } },
      { params: { id: "13" } },
      { params: { id: "14" } },
      { params: { id: "15" } },
      { params: { id: "16" } },
    ],
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const headers = {
    "Content-Type": "application/json",
    "x-app-token": "E9FE46D9-FC93-480F-9DC6-D26F7DE243A0",
  };

  const res = await fetch(
    `https://ms-testnet.api.onnftverse.com/v1/marketplace/blog/post/${id}/detail`,
    {
      headers,
    }
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};
