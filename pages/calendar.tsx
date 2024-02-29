import Image from 'next/image';
import calendar from '../public/calendar.jpg';
import Menu from '../components/Menu';
import React from 'react';

export default function Calendario() {
    return (
        <div className="relative">
            <header className="relative h-screen">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        priority
                        src={calendar}
                        placeholder="blur"
                        alt="banner-calendar"
                    />
                    <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
                </div>

                <Menu />
            </header>
        </div>
    );
}

