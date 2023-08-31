import Image from "next/image";
import { logo } from "@/public/assets";
const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-800 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-44 justify-center py-12">
        <div className="flex flex-col items-center">
          <Image src={logo} width={300} height={300} alt="logo"/>
          <p className="content text-white">
            ReportWritingHelp.com is one of the best places to get help in
            academic report writing, assignments, dissertations, essays, and all
            kinds of academic papers. Our team of experts is available 24/7 to
            the students
          </p>
        </div>
        <div className="flex flex-col items-center text-white ">
          <h3 className="font-bold text-xl">Our Services</h3>
          <ul>
            <li className="list-item hover:text-primary cursor-pointer">Report</li>
            <li className="list-item hover:text-primary cursor-pointer">Assignment</li>
            <li className="list-item hover:text-primary cursor-pointer">Essay</li>
            <li className="list-item hover:text-primary cursor-pointer">Dissertation</li>
            <li className="list-item hover:text-primary cursor-pointer">Case Study</li>
            <li className="list-item hover:text-primary cursor-pointer">Coursework</li>
            <li className="list-item hover:text-primary cursor-pointer">Transcription</li>
            <li className="list-item hover:text-primary cursor-pointer">Proof Reading</li>
            <li className="list-item hover:text-primary cursor-pointer">Referencing</li>
            <li className="list-item hover:text-primary cursor-pointer">Research</li>
            <li className="list-item hover:text-primary cursor-pointer">Plagiarism Checker</li>
            <li className="list-item hover:text-primary cursor-pointer">Phd Thesis</li>
          </ul>
        </div>
        <div className="flex flex-col text-white items-center">
          <h3 className="font-bold text-xl">Useful Links</h3>
          <ul>
            <li className="list-item hover:text-primary cursor-pointer">Home</li>
            <li className="list-item hover:text-primary cursor-pointer">About us</li>
            <li className="list-item hover:text-primary cursor-pointer">Blog</li>
            <li className="list-item hover:text-primary cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
