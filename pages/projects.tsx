import Image from 'next/image';
import Act from '../public/Action.jpeg';
import Menu from '../components/Menu';
import React from 'react';

export default function Projetos() {
  return (
    <div className="relative">
      <header className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            priority
            src={Act}
            placeholder="blur"
            alt="igreja"
          />

          <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
        </div>

        <Menu />
      </header>
    </div>
  );
}