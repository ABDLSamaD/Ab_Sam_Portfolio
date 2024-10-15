import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 my-8 flex items-center justify-evenly flex-col">
      <div className="container">
        <div className="gmail mb-28">
          <h1 className="text-xl md:text-5xl text-cyan-50 underline hover:text-amber-600 transition-colors delay-150 text-center">
            <Link href="#">samadpakhtoon09@gmail.com</Link>
          </h1>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-2xl text-cyan-50 tracking-wider hover:text-amber-600 transition-colors delay-150">
            BADIN, PK
          </span>
          <span className="text-2xl text-cyan-50 tracking-wider hover:text-amber-600 transition-colors delay-150">
            ab_d.Samad 2024
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
