import React from "react";


const About = () => {
  return (
    
    <div
    id = "aboutPage"
    name="about"
    className="h-screen w-full bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-400"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        
        <h2 className="text-4xl sm:text-9xl font-bold text-lime-900 text-center">
          About me
        </h2>
        <br />
        <p className="sm:text-2xl font-black text-orange-900 text-left" id = "aboutBody">
        A year ago, I made the decision to shift my career from BPO to Information Technology. It was the biggest leap that I've made in my career - and I am glad that I did.
        <br />
        <br />
        I enrolled in an IT Bootcamp here in the Phillippines. Although it was tough at first, I was able to - as the surfers would say - ride the big wave.
        <br />
        <br />
        Of all the lessons that we had, my favorites were Designs and Data. There's something about presenting my data, project ideas, and outputs that feels innate to me. 
        </p>
      </div>
    </div>
  </div>
  
  );
  
};

export default About;
