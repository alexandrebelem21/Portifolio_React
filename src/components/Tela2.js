import React from 'react';
import { RxDoubleArrowDown } from 'react-icons/rx';
import github from '../images/github.png';

function Tela2() {
  return (
    <div
      className="snap-start h-screen w-screen
  flex items-center scroll-smooth justify-center font-righteous"
    >
      <div className="text-black text-6xl h-[50%]  w-2/3 grid grid-cols-8 divide-x divide-neutral-500 ">

        <div className=" text-5x text-neutral-200 col-start-1 col-end-4 text-right pr-8">
          Projeto Cards
        </div>
        <div className="text-left px-4 col-start-4 col-end-9 flex h-screen justify-center items-top">
          <img src={github} className="w-full h-1/2" alt="Minha imagem" />
        </div>
      </div>

      <RxDoubleArrowDown className=" text-gray-400 absolute bottom-10 h-8 w-8 animate-pulse" />

    </div>

  );
}

export default Tela2;
