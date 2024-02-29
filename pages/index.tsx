import { useState, useEffect } from 'react';
import Image from 'next/image';
import img from '../public/4.png';
import Menu from '../components/Menu';
import React from 'react';

export default function Gallery() {
  const options = ['Softwares', 'Website', 'Aplicativos'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
    }, 2500); // Altere o tempo de transição conforme necessário (em milissegundos)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <header className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            priority
            src={img}
            placeholder="blur"
            alt="Banner"
          />
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>

        <Menu />

        <div className="flex flex-col justify-center items-start h-full absolute top-0 left-0 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
          <div className="text-center">
            <h1 className="mt-1 text-center text-gray-900 uppercase sm:text-lg sm:tracking-tight font-semibold lg:text-1xl">
              <span className="block text-white">Tecnologia & Serviços digitais</span>
            </h1>
            <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-start text-xl font-semibold tracking-wide text-white">
              Somos especialistas em
            </p>
          </div>
          <div>
            <p className="option relative left-0 right-0 mx-auto my-8 max-w-xl text-center text-5xl font-semibold tracking-wide text-purple-600">
              {options[currentIndex]}
            </p>
          </div>
          <h1 className="mt-1 text-start text-gray-300 sm:text-sm sm:tracking-tight font-semibold lg:text-1xl max-w-xl">
            <span className="block">
              A Lithium Company é especializada em tecnologia, desenvolvendo softwares, aplicativos e sites de alta performance para impulsionar o sucesso do seu negócio.
            </span>
          </h1>
          <a
            href="https://wa.me/5583986113504"
            target="_blank"
            className="mt-8 bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded transition-all duration-300 ease-in-out"
          >
            Entrar em contato
          </a>
        </div>
      </header>
    </div>
  );
}



