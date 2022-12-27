import React from 'react';
import ale from '../images/ale.jpg';

function About() {
  return (

    <div
      className="snap-start h-screen w-screen
    flex items-center scroll-smooth justify-center font-webserver"
    >
      <div className="text-black text-6xl h-[50%]  w-2/3 grid grid-cols-8 divide-x divide-neutral-500 ">

        <div className=" text-5x text-neutral-200 col-start-1 col-end-4 text-center">
          <img src={ale} className="w-full pr-8 " alt="Minha imagem" />
        </div>
        <div className="text-left px-4 col-start-4 col-end-9 flex h-screen justify-center items-top">
          <div className="text-xl text-neutral-200">
            Sobre bla bla bla bla
            Sobre bla bla bla bla
            Sobre bla bla bla bla
            Sobre bla bla bla bla
            Sobre bla bla bla bla
            Sobre bla bla bla bla
            Sobre bla bla bla bla
            Sobre bla bla bla bla
            <br />
            {' '}
            <br />
            {' '}
            <br />
            Sobre bla bla bla bla
            Sobre bla bla bla bla
            Sobre bla bla bla bla

          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
