import React from "react";
import { data } from "../data/events";
import { Link } from "react-router-dom";

function BlogPage() {
  return (
    <section className="mt-20">
        <h1 className="text-center font-bold lg:text-4xl md:text-4xl sm:text-2xl text-xl uppercase mb-10">our blog</h1>
      <div className="container mt-20 article--cards grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {data.map((post) => (
          <div key={post.id} className="card shadow-lg rounded-b-xl">
            <img
              className="rounded-t-xl h-60 w-screen"
              src={`${post.image_url}`}
              alt="Event 01"
            />
            <div className="content p-5">
              <div className="date text-primary text-sm text-center bg-primary/20 rounded-full px-2 py-1 mt-5 mb-5 w-2/4 font-bold">
                {post.date}
              </div>
              <h3 className="text-black capitalize font-bold text-lg">
                {post.title}
              </h3>
              <p className="mt-5">{post.description}</p>
              <button className="mt-5">
                <Link className="text-primary" to={`/blog/${post.slug}`}>
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
