import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import client from "./../client";
import BlockContent from "@sanity/block-content-to-react";

function SinglePost() {
  const [singlePost, setSinglePost] = useState([]);
  const { slug, id } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current== "${slug}"]{
    title,
    _updatedAt,
    _createdAt,
    body,
    mainImage{
      asset ->{
        _id,
        url
      },
      author,
      alt
    }
  }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch((error) => console.error());
  }, [slug]);

  return (
    <section className="mt-10">
      <div className="blog--container">
        <h1 className="font-bold text-center uppercase text-4xl">
          {singlePost.title}
        </h1>
        {singlePost.mainImage && singlePost.mainImage.asset && (
          <img
            className="mt-10 rounded-lg "
            src={`${singlePost.mainImage.asset.url}`}
            alt={`${singlePost.title}`}
          />
        )}
        <div className="name--and--date">{singlePost.author}</div>
        <div className="date text-primary text-sm text-center bg-primary/20 rounded-full px-2 py-3 mt-5 mb-5 w-40 font-bold">
          {new Date(singlePost._updatedAt).toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </div>
        <div>
          <BlockContent
            blocks={singlePost.body}
            projectId={"4ybkkhny"}
            dataset={"production"}
          />
        </div>
        <button className="text-white bg-primary px-5 py-2 rounded-full shadow-lg mt-10">
          <Link to={"/blog"}>Back to Blog</Link>
        </button>
      </div>
    </section>
  );
}

export default SinglePost;
