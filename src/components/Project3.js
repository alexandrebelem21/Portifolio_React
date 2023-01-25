import React from 'react';
import wallet from '../images/wallet.png';

function Project3() {
  const goProject = () => {
    window.location.assign('https://www.linkedin.com/in/alexandre-belem21/');
  };
  return (
    <div className="mt-0">
      <div className="text-black text-6xl h-screen w-[100vw]
    grid grid-rows-3 md:grid-rows-2 divide-y md:divide-y-0  md:mt-[25%]
    mt-[50vh]
    md:ml-[18vw]
    md:w-2/3  md:grid-cols-8 md:divide-x  divide-neutral-500 "
      >

        <div className=" pl-12 md:pl-0 text-5xl text-neutral-200 w-[100vw] md:w-[25vw]
      md:col-start-1 md:col-end-4 flex items-end md:items-start md:mx-auto"
        >
          <div className=" text-3xl md:text-5xl text-neutral-200 col-start-1 col-end-4
          text-center md:text-right pr-8 mx-auto "
          >
            Project Wallet
            <div className=" text-sm md:text-base text-neutral-500 mt-6">
              { (window.screen.width < 700)
                ? (
                  <div>
                    <p>
                      {`Consiste em uma carteira virtual que permite gerenciar despesas.
                      Uma consulta a uma api é feita para fazer a conversao par ao Real.
                      Foi usado ReactJs com redux e o bootstrap.
                      
                      `}
                    </p>
                  </div>
                )
                : (
                  <div>
                    <p>
                      {`
                 Consiste em uma carteira virtual que permite adicionar, remover ou ainda editar despesas.
                 Na primeira pagina é nescessario fazer um login, com um email valido.
                 `}
                    </p>

                    <p>
                      {`Atraves de uma api é possivel ver o valor lançado nas mais pouplares moedas e a conversão para o real.
                      `}
                    </p>
                    <br />
                    <p>
                      {`Foi desenvolvido usando o React com redux e para auxiliar na estilizaçao foi usado o bootstrap. 
                      `}
                    </p>
                  </div>
                )}
            </div>
          </div>
        </div>
        <div className="text-left mx-auto md:mr-8 mr-0
      pl-16 md:pl-8 pt-2 md:pt-0 pr-1
      md:px-4 md:col-start-4 md:col-end-9
      md:w-[50vw]
      w-[100vw]
        flex md:h-screen justify-center items-top"
        >
          <button
            type="button"
            onClick={() => goProject()}
          >
            <img src={wallet} className="md:h-[50vh] mt-8 h-[30vh] w-[100vw] mx-auto pr-8 " alt="Minha imagem" />
          </button>

        </div>
      </div>
      <div className="relative text-base md:text-2xl md:rotate-90
      justify-center md:left-[76vh] bottom-20 md:bottom-[75vh] hidden md:flex gap-2 md:gap-6 md:mt-4"
      >
        <p className="text-gray-700 md:mb-4">Home</p>
        <p className="text-gray-700 md:mb-4">About</p>
        <p className="text-gray-700 md:mb-4">Project 1</p>
        <p className="text-gray-700 md:mb-4">Project 2</p>
        <p className="text-gray-500 md:mb-4">App_Wallet</p>
        <p className="text-gray-700 md:mb-4">Contact</p>
      </div>
    </div>
  );
}

export default Project3;
