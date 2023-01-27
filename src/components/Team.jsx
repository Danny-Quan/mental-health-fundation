import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Team() {
  return (
    <section>
      <h2 className="uppercase text-center font-bold text-xl">our team</h2>
      <div className="team--section mt-10 mb-5 team grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-10 text-center">
        <div className="team--card">
          <img
            src="./../img/undraw_female_avatar_efig.svg"
            alt="female avatar"
          />
          <div className="name font-bold text-black">Dr. Bright</div>
          <div className="position text-primary font-bold">Nutritionist</div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className="icons flex gap-5 items-center justify-center">
            <Link to={'#'}>
            <FaFacebook />
            </Link>
            <Link to={'#'}>
            <BsTwitter />
            </Link>
            <Link to={'#'}>
            <FaLinkedinIn />
            </Link>
          </div>
        </div>
        <div className="team--card">
          <img
            src="./../img/undraw_female_avatar_efig.svg"
            alt="female avatar"
          />
          <div className="name font-bold text-black">Dr. Bright</div>
          <div className="position text-primary font-bold">Nutritionist</div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className="icons flex gap-5 items-center justify-center">
            <FaFacebook />
            <BsTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="team--card">
          <img
            src="./../img/undraw_female_avatar_efig.svg"
            alt="female avatar"
          />
          <div className="name font-bold text-black">Dr. Bright</div>
          <div className="position text-primary font-bold">Nutritionist</div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className="icons flex gap-5 items-center justify-center">
            <FaFacebook />
            <BsTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="team--card">
          <img
            src="./../img/undraw_female_avatar_efig.svg"
            alt="female avatar"
          />
          <div className="name font-bold text-black">Dr. Bright</div>
          <div className="position text-primary font-bold">Nutritionist</div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className="icons flex gap-5 items-center justify-center">
            <FaFacebook />
            <BsTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="text-center">
      <button className="mt-10 text-center px-10 py-2 shadow-lg rounded-full bg-primary text-white border-2 border-primary hover:text-primary hover:bg-transparent transition-all duration-200">
        <Link
          
          to={"/all-team"}
          >
          Show More
        </Link>
      </button>
          </div>
    </section>
  );
}

export default Team;
