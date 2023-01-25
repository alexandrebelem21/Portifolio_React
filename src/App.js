import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Project1 from './components/Project1';
import Project3 from './components/Project3';
import Project2 from './components/Project2';

function App() {
  const teste = () => {
    window.location.assign('https://www.linkedin.com/in/alexandre-belem21/');
  };

  return (
    <div
      className="bg-[#141414]
      snap-x md:snap-y snap-mandatory
      flex md:block mx-auto
      h-screen md:w-screen w-screen
        overflow-scroll scroll-smooth

        "
    >
      <div className=" text-gray-400 absolute left-8 bottom-[33%]  ">
        <div>
          <button
            type="button"
            onClick={() => teste()}
          >
            <FiLinkedin className="h-6 w-6" />
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => teste()}
          >
            <ImWhatsapp className="my-4 h-6 w-6" />
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => teste()}
          >
            <FiGithub className="  h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="bg-[#141414]  snap-start w-screen h-screen
        flex items-center justify-center text-6xl"
      >
        <Main />
      </div>
      <div className="bg-[#141414] snap-start w-screen h-screen
       flex items-center justify-center "
      >
        <About />
      </div>
      <div className="bg-[#141414] snap-start w-screen h-screen
       flex items-center justify-center "
      >
        <Project1 />
      </div>
      <div className="bg-[#141414] snap-start w-screen h-screen
       flex items-center justify-center "
      >
        <Project2 />
      </div>
      <div className="bg-[#141414] snap-start w-screen h-screen
       flex items-center justify-center "
      >
        <Project3 />
      </div>
      <div className="bg-[#141414] snap-start w-screen h-screen
       flex items-center justify-center "
      >
        <Contact />
      </div>
    </div>
  );
}

export default App;
