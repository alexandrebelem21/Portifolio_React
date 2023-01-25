import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const templateParams = {
    ...formData,

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.send('service_6f4hpuj', 'template_os78wq5', templateParams, 'gYt1bcmFTQkIKx0m6')
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('email foi', res.status, res.text);
      });
  };
  return (
    <div className="mt-4">
      <div className="text-black text-6xl h-screen w-[100vw]
    grid grid-rows-3 md:grid-rows-2 divide-y md:divide-y-0  md:mt-[25%]

     md:ml-[18vw]
    md:w-2/3  md:grid-cols-8 md:divide-x  divide-neutral-500 "
      >

        <div className=" pl-12 md:pl-0 text-5xl text-neutral-200 w-[100vw] md:w-[25vw]
      md:col-start-1 md:col-end-4 flex items-end md:items-start md:mx-auto"
        >
          <div className=" text-5x text-neutral-200 col-start-1 col-end-4
          text-center md:text-right pr-8 mx-auto "
          >
            Contato
            <div className=" text-base text-neutral-500 mt-6">
              <div>
                Alexandre Belem
              </div>
              <div>
                alexandrebelemn21@gmail.com
              </div>
              <div>
                +55 22 999669398
              </div>
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
          <form
            onSubmit={handleSubmit}
            className="w-[100vh]"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nome

                <input
                  className="shadow bg-neutral-200 flex w-[80vw] md:w-[40vw]
                  appearance-none border rounded py-2 px-3 text-gray-700
                  leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Nome"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email

                <input
                  className="shadow bg-neutral-200 flex w-[80vw] md:w-[40vw]
                 appearance-none border rounded py-2 px-3 text-gray-700
                 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-neutral-700 text-sm font-bold mb-2" htmlFor="phone">
                Telefone

                <input
                  className="shadow bg-neutral-200 flex w-[80vw] md:w-[40vw]
                  appearance-none border rounded py-2 px-3 text-gray-700
                  leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="Telefone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Mensagem

                <textarea
                  className="shadow bg-neutral-200 flex w-[80vw] md:w-[40vw]
                 appearance-none border rounded py-2 px-3 text-gray-700
                 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Mensagem"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="8"
                />
              </label>
            </div>
            <div className="flex items-center  ">
              <button
                className="bg-neutral-500 hover:bg-neutral-700 text-neutral-200
                w-[80vw] md:w-[40vw] h-12 text-3xl
                font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

      </div>
      <div className="relative text-base md:text-2xl md:rotate-90
      justify-center md:left-[76vh] bottom-20 md:bottom-[75vh] flex gap-2 md:gap-6 md:mt-4"
      >
        <p className="text-gray-700 md:mb-4">Home</p>
        <p className="text-gray-700 md:mb-4">About</p>
        <p className="text-gray-700 md:mb-4">Project 1</p>
        <p className="text-gray-700 md:mb-4">Project 2</p>
        <p className="text-gray-700 md:mb-4">Project 3</p>
        <p className="text-gray-500 md:mb-4">Contact</p>
      </div>
    </div>
  );
}

export default Contact;
