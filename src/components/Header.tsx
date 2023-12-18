import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className=" bg-slate-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
            Jornada Tech
        </h1>
      </div>
    </header>
  );
};

export default Header;
