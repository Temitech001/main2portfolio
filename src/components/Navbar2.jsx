import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
// import Logo from '../assets/logo.png';

const Navbar2 = () => {
  return (
    <div className=" w-screen h-[80px]  ">
      {/* Social icons flex flex-row hidden lg:flex fixed lg:flex-col top -[35%] left-0  was initially up the parent div  use can use width full*/}
      <div className="w-[100%]  flex justify-center items-center">
        <ul
          className=" flex-row
         flex lg:hidden lg:flex-col gap-3 "
        >
          <li className=" flex-row flex  items-center  bg-blue-600">
            <a
              className="flex  items-center w-full "
              href="/"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
          <li className=" flex  items-center  bg-[#333333]">
            <a
              className="flex  items-center w-full text-gray-300"
              href="/"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li className="flex  items-center  bg-[#6fc2b0]">
            <a
              className="flex  items-center w-full text-gray-300"
              href="/"
            >
              <HiOutlineMail size={20} />
            </a>
          </li>
          <li className=" flex j items-center  bg-[#565f69]">
            <a
              className="flex  items-center w-full text-gray-300"
              href="/"
            >
              <BsFillPersonLinesFill size={20} />
            </a>
          </li>
          <li className="w-[60px] h-[60px] flex items-center  bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/Temini001"
            >
              <AiFillTwitterCircle size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
