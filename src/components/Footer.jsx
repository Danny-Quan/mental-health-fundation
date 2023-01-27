import React from "react";
import { data } from "./../data/events";
import { NavLink } from "react-router-dom";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const renderArray = data.slice(0, 2);
  return (
    <footer className="bg-dark text-white pt-20 pb-40 relative">
      <div className="container grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2  gap-10">
        <div className="footer--about">
          <h3 className="font-bold text-lg mb-5">About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
            tenetur! Repellat facilis sed commodi animi recusandae error placeat
            libero, ipsa accusantium similique id enim et sapiente cum neque
            modi quisquam?
          </p>
        </div>
        <div className="footer-services">
          <h3 className="font-bold text-lg mb-5">Quick Links</h3>
          <ul>
            <li className="pb-2">
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li className="pb-2">
              <NavLink to={'/about-us'}>About</NavLink>
            </li>
            <li className="pb-2">
              <NavLink to={'/services'}>Services</NavLink>
            </li>
            <li className="pb-2">
              <NavLink to={'/contact-us'}>Contact Us</NavLink>
            </li>
            <li className="pb-2">
              <NavLink to={'/support-us'}>Support Us</NavLink>
            </li>
            <li className="pb-2">
              <NavLink to={'/blog'}>Events</NavLink>
            </li>
          </ul>
        </div>
        <div className="news">
          <h3 className="font-bold text-lg mb-5">Top News</h3>
          {renderArray.map((post, index, arr) => (
            <NavLink key={post.id} to={'/blog/slug-here'}>
              <div className="flex justify-between items-center gap-5 mb-5">
                <img
                  className="w-20 h-20 rounded-md"
                  src={`${post.image_url}`}
                  alt="news"
                />
                <div>
                  <h3 className="text.sm">{post.title}</h3>
                  <p className="text-sm">{post.date}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        <div className="contact">
          <h3 className="font-bold text-lg mb-5">Contact</h3>
          <p className="mb-2">Techiman, Jama Timponim</p>
          <p className="mb-2">+233 54 514 3000</p>
          <p className="mb-2">+233 50 683 1849</p>

          <a className="text-primary" href="mailto:companyname@gmail.com">
            companyname@gmail.com
          </a>
          <br />
          <h3 className="font-bold text-lg mb-5 mt-10">Let's Connect</h3>
          <div className="flex w-28 justify-between items-center gap-5">
            <NavLink className={"text-2xl"} to={"/"}>
              {<FaFacebook />}
            </NavLink>
            <NavLink className={"text-2xl"} to={"/"}>
              {<FaTwitter />}
            </NavLink>
            <NavLink className={"text-2xl"} to={"/"}>
              {<FaYoutube />}
            </NavLink>
            <NavLink className={"text-2xl"} to={"/"}>
              {<FaInstagram />}
            </NavLink>
          </div>
        </div>
      </div>
      <p className="text-center absolute bottom-0 left-0 right-0 px-5 py-5">
        Mental Health Fundation &copy; 2023. All Right Reserved || by Danny Quan
      </p>
    </footer>
  );
}

export default Footer;
