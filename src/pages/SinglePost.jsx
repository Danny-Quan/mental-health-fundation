import React from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const { slug } = useParams();
  console.log(slug);
   
  return (
    <section>
      <div className="container">single blog post</div>
    </section>
  );
}

export default SinglePost;
