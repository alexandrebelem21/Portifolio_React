import React from 'react';
import ale from '../images/ale.jpg';

function About() {
  return (

    <div className="text-black text-6xl h-screen w-[100vw]
    grid grid-rows-3 md:grid-rows-2 divide-y md:divide-y-0  md:mt-[25%]

     md:ml-0
    md:w-2/3  md:grid-cols-8 md:divide-x  divide-neutral-500 "
    >

      <div className=" pl-12 md:pl-0 text-5xl text-neutral-200
      md:col-start-1 md:col-end-4 flex items-end mx-auto"
      >
        <img src={ale} className="md:w-full w-[50%] mx-auto pr-8 " alt="Minha imagem" />
      </div>
      <div className="text-left mx-auto md:mr-8 mr-0
      pl-16 md:pl-8 pt-2 md:pt-0 pr-1
      md:px-4 md:col-start-4 md:col-end-9
      h-[100%]
        flex md:h-screen justify-center items-top"
      >
        <div className="text-sm md:text-xl font-webserver text-neutral-200">
          { (window.screen.width < 700)
            ? (
              <div>
                <p>
                  {`Bem-vindo! Sou o Alexandre Belem e concluí recentemente meu curso de dev Web na Trybe, 
            além de estar cursando Tecnólogo em Cibersegurança na XPE e de UI/UX da Google.`}
                </p>
                <br />
                <p>
                  {`Minha paixão é criar projetos funcionais e atraentes, 
           por isso, se você estiver procurando por um desenvolvedor iniciante com habilidades sólidas 
           em HTML, CSS, JavaScript, Git, ReactJS e Tailwind, não hesite em entrar em contato: Quero 
           contribuir para o sucesso de sua empresa!`}
                </p>
              </div>
            )
            : (
              <div>
                <p>
                  {`
                  Bem-vindo! Sou o Alexandre Belem e quero te apresentar minha jornada e alguns de meus projetos: 
                  Conclui recentemente meu curso de desenvolvedor Web na Trybe, e atualmente curso Tecnólogo em 
                  Cibersegurança na XPE e de UI/UX da Google. `}
                </p>
                <br />
                <p>
                  {`Desde o início sempre tive a paixão por criar projetos funcionais e atraentes 
                  e através dos meus cursos pude aprender com profissionais experientes e me aprofundar em tecnologias 
                  atuais e relevantes no mercado. `}
                </p>
                <br />
                <p>
                  {`Se você estiver procurando por um desenvolvedor iniciante com habilidades sólidas em 
                HTML, CSS, JavaScript, Git, ReactJS e Tailwind, não hesite em entrar em contato. 
                Estou ansioso para trabalhar em projetos interessantes e contribuir para o sucesso de sua empresa.`}
                </p>
              </div>
            )}
        </div>
      </div>
    </div>

  );
}

export default About;
