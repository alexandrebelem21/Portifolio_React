import React from 'react';
import ale from '../images/ale.jpg';

function About() {
  return (

    <div className="text-black text-6xl h-screen w-screen
    grid grid-rows-2 divide-y md:divide-y-0  md:mt-[25%]

     md:ml-0
    md:w-2/3  md:grid-cols-8 md:divide-x  divide-neutral-500 "
    >

      <div className=" pl-4 md:pl-0 text-5xl text-neutral-200
      md:col-start-1 md:col-end-4 flex items-end mx-auto"
      >
        <img src={ale} className="md:w-full w-[200px] pr-8 " alt="Minha imagem" />
      </div>
      <div className="text-left mx-auto px-16
      pl-20 md:pl-8
      md:px-4 md:col-start-4 md:col-end-9
      h-[100%]
        flex md:h-screen justify-center items-top"
      >
        <div className="text-sm md:text-base font-webserver text-neutral-200">
          <p>
            {`Bem-vindo sou o Alexandre Belem quero te conduzir na minha jornada até aqui, venha conecer um pouco sobre mim e vou lhe apresentar alguns de meu projetos.
            Conclui recentemente meu curso de desenvolvedor Web na Trybe, e atualmente curso Tecnologo em Cibersegurança na XPE, além de um curso de UI/UX da Google. `}
          </p>
          <p>
            {`Desde o início de minha jornada como desenvolvedor web, sempre tive a paixão por criar projetos funcionais e atraentes. 
        Isso me levou a me matricular na Trybe, onde pude aprender com profissionais experientes e me aprofundar em tecnologias atuais e relevantes no mercado.`}

          </p>
          <p>
            {` Até o momento, já participei de vários projetos de pequena escala, onde tive a oportunidade de aplicar meus conhecimentos em HTML, CSS e JavaScript 
        para criar sites responsivos e funcionais. Além de trabalhar com o Git para gerenciar o versionamento de código e colaborar em projetos em equipe.` }
          </p>
          <p>{' Me aprofundei no ReactJS. Também tenho experiência com o Tailwind, um framework de design de interface de usuário.' }</p>
          <p>{' Estou sempre procurando por novas oportunidades para aprender e crescer como desenvolvedor web. Se você estiver procurando por um desenvolvedor iniciante com habilidades sólidas em HTML, CSS, JavaScript, Git, ReactJS e Tailwind, não hesite em entrar em contato. Estou ansioso para trabalhar em projetos interessantes e contribuir para o sucesso de sua empresa.' }</p>
        </div>
      </div>
    </div>

  );
}

export default About;
