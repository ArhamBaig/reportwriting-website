import { logo } from "@/public/assets";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-col">
      <div className="bg-secondary h-10"></div>
      <div className="container justify-between px-32 py-3 items-center  mx-auto flex">
        <Image src={logo} height={150} width={150} />

        <div className="hidden md:flex text-black">
          <ul className="flex space-x-16 ">
            <li><a href="#" className="hover:text-gray-300 border-b-2 border-b-secondary">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Countries</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            <li><a href="#" className="hover:text-gray-300">Order Now</a></li>
          </ul>
        </div>
        
        {/* <div className="md:hidden">
          <button className="text-black">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
