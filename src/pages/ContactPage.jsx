import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

function ContactPage() {
  return (
    <section>
      <div className="relative">
        <img
          className="h-80 w-screen"
          src="./../img/wallpaperflare.com_wallpaper (7).jpg"
          alt="contact us"
        />
        <h1 className="absolute top-36 left-0 right-0 capitalize font-bold text-white text-4xl  text-center">
          contact us
        </h1>
      </div>
      <div className="container">
        <h3 className="text-black capitalize font-bold text-xl mb-10 py-5">
          book an appointment
        </h3>
        <div className=" grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-10">
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              natus consequatur mollitia dolorem. adipisicing elit. Tenetur
              natus consequatur mollitia dolorem.
            </p>
            <div className="details mt-10">
              <div className="flex gap-5 items-center">
                <FaPhone className="text-white bg-secondary text-4xl p-2 rounded-full" />
                <p>+233 54 514 3000</p>
              </div>
              <div className="flex gap-5 items-center mt-5">
                <FaPhone className="text-white bg-secondary text-4xl p-2 rounded-full" />
                <p>+233 50 683 1849</p>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <FaEnvelope className="text-white bg-secondary text-4xl p-2 rounded-full" />
                <a href="mailto:companyname@gmail.com">companyname@gmail.com</a>
              </div>
            </div>
          </div>
          <form action="">
            <input type="text" placeholder="Enter name" required />
            <input type="email" placeholder="Enter email" required />
            <input type="tel" placeholder="Phone" required />
            <input type="text" placeholder="Subject" required />
            <textarea
              style={{ resize: "none" }}
              name="message"
              placeholder="Enter message here"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button
              className="bg-primary  text-white py-2 px-10 hover:bg-primary/70 transition-all duration-300 rounded-full mt-5 shadow-lg"
              type="submit"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
