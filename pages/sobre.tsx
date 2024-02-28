import Image from 'next/image';
import igreja from '../public/hist.jpg';
import Menu from '../components/Menu';

export default function Sobre() {
    return (
        <div className="relative">
            <header className="relative h-screen">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        priority
                        objectFit="cover"
                        layout="fill"
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