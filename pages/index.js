import Link from "next/link";
import Head from "next/head";
import { NextSeo } from "next-seo";
const index = ({ posts }) => {
  return (
    <div style={{ backgroundColor: "white", color: "black", paddingTop: "5%" }}>
      <NextSeo
        title="nextjs blog's home page "
        description="Welcome to nexjs blog's home page"
        openGraph={{
          url: "https://nextjs-blog-rouge-pi.vercel.app/",
          title: "nextjs blog's home page ",
          description: "Welcome to nexjs blog's home page",
          images: [
            {
              url: "https://i.ibb.co/2gD41VZ/download.jpg",
              width: 300,
              height: 300,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          siteName: "nexblog",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
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
