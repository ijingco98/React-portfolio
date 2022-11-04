import React from "react";
import jsGame from "../assets/portfolio/jsGame.png";
import reactTodo from "../assets/portfolio/reactTodo.png";
import reactResto from "../assets/portfolio/reactResto.png";
import mern from "../assets/portfolio/mern.png";
import hapag from "../assets/portfolio/hapagPic.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: jsGame,
      githubLink: "https://github.com/ijingco98/Whac-a-Unicorn.git",
      demolink:"https://whackaunicorn.netlify.app/index.html"
    },
    {
      id: 2,
      src: reactTodo,
      githubLink: "https://github.com/ijingco98/To-do-App.git",
      demolink:"https://todoappreact22.herokuapp.com"
    },
    {
      id: 3,
      src: reactResto,
      githubLink: "https://github.com/ijingco98/Resto-App.git",
      demolink:"https://restoapp22.herokuapp.com/shop"

    },
    {
      id: 4,
      src: hapag,
      githubLink: "https://github.com/Caspian3119/github-project7.git",
      demolink:" https://hapag.netlify.app"
    },
    {
      id: 5,
      src: mern,
      githubLink: "https://github.com/ijingco98/Dalluyon-web.git",
      demolink:"https://github.com/ijingco98"
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
          {portfolios.map(({ id, src, githubLink, demolink}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg bg-gradient-to-b from-yellow-400 to-yellow-200">
              <img
                src={src}
                alt=" projects "
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demolink} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-black text-2xl"> DEMO</a>
                <a href={githubLink} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-black text-2xl">Code</a>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
