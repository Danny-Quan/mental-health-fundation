import React from "react";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="flex lg:flex-row md:flex-row sm:flex-col flex-col-reverse justify-between items-center gap-20 mt-24 mb-20">
      <div className="">
        <h1 className="capitalize text-black text-5xl font-bold">your health, our happiness</h1>
        <p className="pt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eius
          quia magni, commodi accusamus doloremque voluptates pariatur esse
          atque! Numquam iusto amet itaque nostrum.
        </p>
        <button className="mt-10 bg-primary shadow-lg text-white py-2 px-5 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary transition-all duration-400"><Link  to={'/contact-us'}>Get Appointment</Link></button>
      </div>
      <div>
        <img src="./../img/undraw_medicine_b-1-ol.svg" alt="headerImage" />
      </div>
    </header>
  );
}

export default Header;
