import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/events";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";

function Events() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type=="post"] | order(priority desc, _updatedAt desc){
    _id,
title,
_createdAt,
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

  const renderArray = posts.slice(0, 3);
  return (
    <section className="relative">
      <h2 className="text-center uppercase text-black font-bold text-xl">
        Latest events / articles
      </h2>
      <div className="mt-20 article--cards grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {renderArray.map((post) => (
          <div key={post._id} className="card shadow-lg rounded-b-xl">
            <img
              className="rounded-t-xl h-60 w-screen"
              src={`${post.mainImage.asset.url}`}
              alt={`${post.title}`}
            />
            <div className="content p-5">
              <div className="date text-primary text-sm text-center bg-primary/20 rounded-full px-2 py-1 mt-5 mb-5 w-2/4 font-bold">
                {new Date(post._createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </div>
              <h3 className="text-black capitalize font-bold text-lg">
                {post.title}
              </h3>
              {/* <p className="mt-5">{post.description}</p> */}
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
      <div className="text-center">
        <button className="mt-10 text-center text-white bg-primary px-8 py-2 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary transition-all duration-300 shadow-lg">
          <Link to={"/blog"}>Show More</Link>
        </button>
      </div>
      {/* {<Support/>} */}
    </section>
  );
}

export default Events;
