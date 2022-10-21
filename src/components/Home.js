import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id = "homePage"
      name="home"
      className="h-screen w-full bg-gradient-to-b from-yellow-400 via-yellow-200 to-yellow-100 background-image:"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
       <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-pink-900 text-left">
            Kumusta? Ako si Israel!
          </h2>
          <br/>
          <br/>
          <p className="sm:text-2xl font-black text-sky-900 text-left" id = "aboutHome">
          I am full-stack web developer.
          I graduated from an IT bootcamp here in the Philippines, and I am now ready to partake in the IT industry.
          You can learn more about my journey on the about page 🫶🏽 </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={1000}
              className="group text-yellow-900 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-emerald-300 to-emerald-600 cursor-pointer"
            >
              My Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-3/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
