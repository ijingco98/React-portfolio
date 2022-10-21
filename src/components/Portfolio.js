import React from "react";
import jsGame from "../assets/portfolio/jsGame.png";
import reactTodo from "../assets/portfolio/reactTodo.png";
import reactResto from "../assets/portfolio/reactResto.png";
import backEnd from "../assets/portfolio/backEnd.png";
import mern from "../assets/portfolio/mern.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: jsGame,
    },
    {
      id: 2,
      src: reactTodo,
    },
    {
      id: 3,
      src: reactResto,
    },
    {
      id: 4,
      src: backEnd,
    },
    {
      id: 5,
      src: mern,
    }
  ];

  return (
    <div
      id = "portfolioPage"
      name="portfolio"
      className="bg-gradient-to-b from-yellow-400 via-yellow-200 to-yellow-100 w-full text-yellow-900 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-100 text-lime-50">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
