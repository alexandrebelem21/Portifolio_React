import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import Tela1 from './components/Tela1';
// import Tela2 from './components/Tela2';
// import Tela3 from './components/Tela3';
// import Tela4 from './components/Tela4';
import About from './components/About';
// import Teste from './components/Teste';
// import Contact from './components/Contact';
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
        <Tela1 />
      </div>
      <div className="bg-[#141414] snap-start w-screen h-screen
       flex items-center justify-center text-6xl"
      >
        <About />
      </div>
    </div>
  );
}

export default App;
