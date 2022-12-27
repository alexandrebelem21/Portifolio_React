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

    <div
      className="snap-start h-screen w-screen
flex items-center scroll-smooth justify-center font-righteous"
    >
      <div className="text-black text-6xl h-[50%]  w-2/3 grid grid-cols-8 divide-x divide-neutral-500 ">

        <div className=" text-5x text-neutral-200 col-start-1 col-end-4 text-right pr-8">
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
        <div className="text-left px-4 col-start-4 col-end-9 flex h-screen items-top">

          <form
            onSubmit={handleSubmit}
            className=""
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nome

                <input
                  className="shadow bg-neutral-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow bg-neutral-200  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow bg-neutral-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Mensagem"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="8"
                />
              </label>
            </div>
            <div className="flex items-center justify-center ">
              <button
                className="bg-neutral-500 hover:bg-neutral-700 text-neutral-200
                w-[60%] h-12 text-3xl
                font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
