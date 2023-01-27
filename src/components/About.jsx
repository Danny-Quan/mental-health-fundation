import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 items-center gap-20">
        <div>
          <img src="./../img/undraw_medical_care_movn.svg" alt="MedicalImage" />
        </div>
        <div className="text-area">
          <h2 className="uppercase font-bold text-black text-lg">
            About us
          </h2>
          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            libero iusto, excepturi, beatae est, facere eligendi ipsam illum
            repellendus dolorum nihil ipsa explicabo minus culpa voluptatibus
            assumenda velit? Fugiat, atque. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Architecto exercitationem corporis
            magnam, voluptatum perspiciatis, doloribus provident cumque
            similique soluta amet voluptatibus
          </p>
          <button className="mt-10"><Link className="bg-primary py-2 px-10 shadow-lg rounded-full text-white hover:bg-transparent border-2 border-primary hover:text-primary transition-all duration-200" to={'/about-us'}>Read More</Link></button>
        </div>
      </div>
    </section>
  );
}

export default About;
