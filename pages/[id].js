import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Head from "next/head";
import { NextSeo } from "next-seo";

const id = ({ post }) => {
  function generateOpenGraphImages(id) {
    const images = [];

    switch (id) {
      case "1":
        images.push({
          url: "/path/to/image-1.jpg",
          width: 800,
          height: 600,
          alt: "Image 1",
          type: "image/jpeg",
        });
        break;

      case "2":
        images.push({
          url: "/path/to/image-2.jpg",
          width: 800,
          height: 600,
          alt: "Image 2",
          type: "image/jpeg",
        });
        break;

      // Add more cases for different IDs...

      default:
        break;
    }

    return images;
  }
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <div style={{ width: "60%", margin: "auto", paddingTop: "5%" }}>
        <NextSeo
          title={post.title}
          description={post.description}
          openGraph={{
            url: "https://nextjs-blog-rouge-pi.vercel.app",
            title: `${post.title}`,
            description: `${post.description}`,
            images: [
              {
                url: "https://i.ibb.co/2gD41VZ/download.jpg",
                width: 300,
                height: 300,
                alt: "Og Image Alt",
                type: "image/jpeg",
              },
            ],
            siteName: "nextblog",
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
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
