import React from "react";
import { Link } from "react-router-dom";

function Appointment() {
  return (
    <section className="bg-primary py-10">
      <div className="container lg:flex md:flex sm:flex justify-center items-center gap-20">
        <div className="image">
          <img
            className="appointment--image rounded-full w-60 h-60"
            src="./../img/wallpaperflare.com_wallpaper (4).jpg"
            alt="appointment"
          />
        </div>
        <div className="text lg:w-3/5 md:w-3/5 sm:w-5/5">
          <h3 className="font-bold text-white text-xl mb-5">
            Book an <br />
            Appointment today!
          </h3>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
            laborum. consectetur adipisicing elit. Explicabo, laborum.
          </p>
          <button className="mt-10 text-white bg-secondary py-2 px-5 rounded-full shadow-lg hover:text-white border-2 border-secondary hover:bg-transparent transition-all duration-300">
            <Link to={'/contact-us'} >
              Get Appointment
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
