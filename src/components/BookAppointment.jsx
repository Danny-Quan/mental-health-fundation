import React from "react";
import { Link } from "react-router-dom";

function BookAppointment() {
  return (
    <section className="shadow-lg py-2 px-5 rounded-lg">
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-10 py-5 px-5 items-center">
        <h3 className="title capitalize text-black font-bold text-lg">
          Want quality mental health solutions?
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          harum eligendi?
        </p>
        <div>

        <button  className="text-white bg-secondary hover:bg-transparent border-2 border-secondary hover:text-secondary px-5 py-2 shadow-lg rounded-full transition-all duration-300">
          <Link
           
            to={"/contact-us"}
          >
            Contact Us
          </Link>
        </button>
           </div>
      </div>
    </section>
  );
}

export default BookAppointment;
