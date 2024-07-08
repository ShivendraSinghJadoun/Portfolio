

import React from "react";
import Learn from "../assests/Learnit.png";
import billing from "../assests/billing.png";
import image from "../assests/image.png";

function Projects() {
  return (
    <section id="projects" className="p-8 bg-gradient-to-r from-black to-black text-gray-100 flex flex-col items-center gap-6">
      <h2 className="text-4xl font-extrabold mb-8 text-center animate-fade-in">Projects</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-4 w-full md:w-3/4 border-b-2 rounded-lg animate-slide-up">
        <div className="w-full md:w-1/2 transform transition-transform duration-500 hover:scale-105">
          <img src={Learn} alt="Learn...it" className="w-full h-auto rounded-lg shadow-md animate-zoom-in" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-2xl font-bold animate-fade-in">PassOp</h3>
          <p className="text-lg animate-fade-in">Developed a comprehensive Password Manager using the MERN stack.</p>
          <ul className="list-disc pl-5 text-lg space-y-2 animate-fade-in">
            <li>In this project you  Add Name, Add password, Delete password, And Copy everything </li>
            <li>The user dashboard allows  to view and update their details and track everything.</li>
          </ul>
          <div className="btns flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
            <a href="https://learniitt.netlify.app/" target="_blank">
              <button className="bg-blue-600 text-white text-xl font-medium py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">View Project</button>
            </a>
            <a href="" target="_blank">
              <button className="bg-gray-700 text-white text-xl font-medium py-2 px-6 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">View Source Code</button>
            </a>
          </div>
        </div>
      </div>

     

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-4 w-full md:w-3/4 border-b-2  rounded-lg animate-slide-up">
        <div className="w-full md:w-1/2 transform transition-transform duration-500 hover:scale-105">
          <img src={image} alt="E-commerce Platform" className="w-full h-auto rounded-lg shadow-md animate-zoom-in" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-2xl font-bold animate-fade-in">is..store</h3>
          <p className="text-lg animate-fade-in">Developed a feature-rich e-commerce platform using React and Tailwind CSS.</p>
          <ul className="list-disc pl-5 text-lg space-y-2 animate-fade-in">
            <li>User registration and login functionalities to manage user accounts securely.</li>
            <li>Browse and search for products with detailed descriptions and pricing information.</li>
            <li>Shopping cart functionality to add and remove products, with real-time updates.</li>
            <li>Secure checkout process with integrated payment gateways for seamless transactions.</li>
            <li>Admin dashboard for managing products, categories, and orders efficiently.</li>
          </ul>
          <div className="btns flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
            <button className="bg-blue-600 text-white text-xl font-medium py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">View Project</button>
            <button className="bg-gray-700 text-white text-xl font-medium py-2 px-6 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">View Source Code</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
