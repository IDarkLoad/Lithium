import Image from 'next/image';
import igreja from '../public/hist.jpg';
import Menu from '../components/Menu';
import React from 'react';

export default function Sobre() {
    return (
        <div className="relative">
            <header className="relative h-screen">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        priority
                        src={igreja}
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