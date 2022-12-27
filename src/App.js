import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import Tela1 from './components/Tela1';
import Tela2 from './components/Tela2';
import Tela3 from './components/Tela3';
import Tela4 from './components/Tela4';
import About from './components/About';
import Contact from './components/Contact';
// import teste from './images/teste.png';
// import github from './images/github.png';
// import onda from './images/onda.svg';

function App() {
  // return (
  //   <div>
  //     <a href="www.google.com">
  //       <FiLinkedin className="h-6 w-6" />

  //     </a>
  //   </div>
  // );
  const teste = () => {
    window.location.assign('https://www.linkedin.com/in/alexandre-belem21/');
  };

  return (
    <div
      className="snap-y snap-mandatory h-screen w-screen
        overflow-scroll bg-[#141414] scroll-smooth"
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
      <Tela1 />
      <About />
      <Tela2 />
      <Tela3 />
      <Tela4 />
      <Contact />
    </div>
  );
}

export default App;
