import React from "react";
import { Link } from "react-router-dom";

function Support() {
  return (
    <div className="bg-primary p-10 lg:rounded-full md:rounded-full rounded-2xl text-white ">
      <div className="text-center">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quam
          nihil minus nostrum eaque perferendis. adipisicing elit.
        </p>
        <button className="mt-5 text-white bg-secondary py-2 px-10 rounded-full shadow-lg">
          <Link
            
            to={"/support-us"}
          >
            support us
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Support;
