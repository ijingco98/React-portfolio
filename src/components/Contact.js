import React from "react";

const Contact = () => {
  return (
    <div
      id = "contactPage"
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-100 text-emerald-900">
            Cotact
          </p>
          <p className="py-6 text-emerald-900">You can fill out the form bellow to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/2dc23dff-f2ea-4f0d-9c51-fb9f95ef545e"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name here"
              className="p-2 bg-transparent border-2 rounded-md text-emerald-900 focus:outline-none border-emerald-800"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email address here"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-emerald-900 focus:outline-none border-emerald-600"
            />
            <textarea
              name="message"
              placeholder="Enter your message here"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-emerald-900 focus:outline-none border-emerald-500"
            ></textarea>

            <button className="text-emerald-900 bg-gradient-to-r from-emerald-300 to-emerald-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
