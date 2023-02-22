import Link from "next/link";
import Head from "next/head";
const index = ({ posts }) => {
  return (
    <div style={{ backgroundColor: "white", color: "black", paddingTop: "5%" }}>
      <Head>
        <title>nextjs blog's home page </title>
        <meta name="description" content="Welcome to nexjs blog's home page" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <div style={{ width: "60%", margin: "auto" }}>
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "5%" }}>
            Welcome to Gatsby Blog
          </h1>

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
                  margin: "0% auto 5%",
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
