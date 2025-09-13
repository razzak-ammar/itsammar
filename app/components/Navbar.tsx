import Link from "next/link";

async function Navbar() {
  return (
    <div className="w-full py-6 px-4">
      {/* Brand */}
      <div className="navbar-left flex self-center items-center">
        <h1 className="font-bold text-2xl mr-8">
          it's <span className="text-teal-500">Ammar</span>
        </h1>
        <div className="navbar-items flex gap-4">
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
      </div>
      <div className="navbar-right"></div>
    </div>
  );
}

export default Navbar;
