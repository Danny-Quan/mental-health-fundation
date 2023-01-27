import React from "react";
import {RiMentalHealthFill} from 'react-icons/ri'

function services() {
  return (
    <section className="bg-accent/40 py-20">
      <div className="container">

      
      <h2 className="text-black font-bold text-xl uppercase text-center">
        what we do
      </h2>
      <div className="service__cards grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-5 mt-20">
        <div className="card p-5 hover:shadow-xl hover:rounded-xl hover:bg-white transition-all duration-300">
          <RiMentalHealthFill className="text-primary p-1 bg-primary/20 text-4xl rounded-md"/>
          <h3 className="text-black font-bold text-lg">consultation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            itaque nulla repellendus iste asperiores 
          </p>
        </div>
        <div className="card p-5 hover:shadow-xl hover:rounded-xl hover:bg-white transition-all duration-300">
        <RiMentalHealthFill className="text-primary p-1 bg-primary/20 text-4xl rounded-md"/>
          <h3 className="text-black font-bold text-lg">consultation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            itaque nulla repellendus iste asperiores 
          </p>
        </div>
        <div className="card p-5 hover:shadow-xl hover:rounded-xl hover:bg-white transition-all duration-300">
        <RiMentalHealthFill className="text-primary p-1 bg-primary/20 text-4xl rounded-md"/>
          <h3 className="text-black font-bold text-lg">consultation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            itaque nulla repellendus iste asperiores
          </p>
        </div>
        <div className="card p-5 hover:shadow-xl hover:rounded-xl hover:bg-white transition-all duration-300">
        <RiMentalHealthFill className="text-primary p-1 bg-primary/20 text-4xl rounded-md"/>
          <h3 className="text-black font-bold text-lg">consultation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            itaque nulla repellendus iste asperiores
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default services;
