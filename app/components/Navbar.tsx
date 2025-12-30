import Link from "next/link";
import { Github, Linkedin, BookText, Menu } from "lucide-react";

async function Navbar() {
  return (
    <div className="w-full py-6 px-4">
      {/* make mobile responsive */}
      <div className="navbar-mobile flex justify-center self-center items-center md:hidden">
        <div className="navbar-items flex gap-4 text-lg">
          <div className="navbar-item cursor-pointer hover:text-teal-500 transition-colors duration-300">
            <Link href="/" className="cursor-pointer">
              <Menu /> <span className="sr-only">Menu</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="navbar-left flex justify-between self-center items-center hidden md:flex">
        <h1 className="font-bold text-3xl mr-8">
          it's <span className="text-teal-500">Ammar</span>
        </h1>
        <div className="navbar-items flex gap-4 text-lg">
          <div className="navbar-item">
            <Link href="/">Home</Link>
          </div>
          <div className="navbar-item">
            <Link href="/">About</Link>
          </div>
          <div className="navbar-item">
            <Link href="/">Blog</Link>
          </div>
          <div className="navbar-item">
            <Link href="/">Research</Link>
          </div>
          <div className="navbar-item">
            <Link href="/">Projects</Link>
          </div>
        </div>
        <div className="navbar-items flex gap-4 text-lg">
          {/* Social Icons */}
          <div className="navbar-item cursor-pointer">
            <Link href="https://github.com/itsammar-dev"> <Github /> <span className="sr-only">GitHub</span> </Link>
          </div>
          <div className="navbar-item cursor-pointer">
            <Link href="https://www.linkedin.com/in/itsammar-dev/"> <Linkedin /> <span className="sr-only">LinkedIn</span> </Link>
          </div>
          <div className="navbar-item cursor-pointer">
            <Link href="https://medium.com/@ammarabdulrahman"> <BookText /> <span className="sr-only">Medium</span> </Link>
          </div>
        </div>  
      </div>
      <div className="navbar-right"></div>
    </div>
  );
}

export default Navbar;
