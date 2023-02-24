import React, { useState, useEffect } from "react";
import { data } from "../data/events";
import { Link } from "react-router-dom";
import client from "./../client";
import BlockContent from "@sanity/block-content-to-react";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type=="post"] | order(priority desc, _updatedAt desc){
          _id,
  title,
  publishedAt,
  _createdAt,
  _updatedAt,
  "timeSincePublished": dateTime(now()) - dateTime(publishedAt),
  slug,
  body,
  mainImage{
  asset -> {
    _id,
    url
  },
  alt
  }
  }`
      )
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="mt-20">
      <h1 className="text-center font-bold lg:text-4xl md:text-4xl sm:text-2xl text-xl uppercase mb-10">
        our blog
      </h1>
      <div className="container mt-20 article--cards grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="card shadow-lg rounded-b-xl">
            <img
              className="rounded-t-xl h-60 w-screen"
              src={`${post.mainImage.asset.url}`}
              alt={`${post.title}`}
            />
            <div className="content p-5">
              <div className="date text-primary text-sm text-center bg-primary/20 rounded-full px-2 py-1 mt-5 mb-5 w-2/4 font-bold">
                {new Date(post._updatedAt).toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                  day: "2-digit",
                })}
              </div>
              <h3 className="text-black capitalize font-bold text-lg">
                {post.title}
              </h3>
              {/* <div className="mt-5">
                <BlockContent
                  blocks={post.body}
                  projectId={"4ybkkhny"}
                  dataset={"production"}
                />
              </div> */}
              <button className="mt-5">
                <Link
                  className="text-primary"
                  to={`/blog/${post._id}/${post.slug.current}`}
                >
                  Read More &rarr;{" "}
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogPage;
