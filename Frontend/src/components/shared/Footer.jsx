
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';  // import icons

const Footer = () => {
  return (
         <footer className="mx-auto w-7xl">
          <div className="container ">

            <div className="flex flex-wrap mx-28">
              
              {/* Column 1 */}
              <div className="px-4 mb-12 md:w-1/4 md:mb-0">
                <h4 className="relative mb-8 text-xl font-semibold text-zinc-800">
                  Student_Hub
                  <span className="block w-12 h-1 mt-2 bg-pink-600"></span>
                </h4>
                <ul className="text-gray-700 ">
                  <li className="mb-2 transition-colors duration-300 hover:text-blue-800 hover:underline"><Link to="#">About us</Link></li>
                  <li className="mb-2 transition-colors duration-300 hover:text-blue-800 hover:underline"><Link to="#">Contact us</Link></li>
                  <li className="mb-2 transition-colors duration-300 hover:text-blue-800 hover:underline"><Link to="#">Privacy policy</Link></li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="px-4 mb-12 md:w-1/4 md:mb-0">
                <h4 className="relative mb-8 text-xl font-semibold text-zinc-800">
                  Get Help
                  <span className="block w-12 h-1 mt-2 bg-pink-600"></span>
                </h4>
                <ul className="text-gray-700">
                  <li className="mb-2 transition-colors duration-300 hover:text-blue-800 hover:underline"><Link to="#">FAQ</Link></li>
                  <li className="mb-2 transition-colors duration-300 hover:text-blue-800 hover:underline"><Link to="#">Courses</Link></li>
                  <li className="mb-2 transition-colors duration-300 hover:text-blue-800 hover:underline"><Link to="#">Branches</Link></li>

                </ul>
              </div>

              {/* Column 3 */}
              <div className="px-4 mb-12 md:w-1/4 md:mb-0">
                <h4 className="relative mb-8 text-xl font-semibold text-zinc-800">
                  Student Section
                  <span className="block w-12 h-1 mt-2 bg-pink-600"></span>
                </h4>
                <ul className="text-gray-700">
                  <li className="mb-2 transition-colors duration-300 hover:text-blue-800 hover:underline"><Link to="#">Student Grievances</Link></li>
                  <li className="mb-2 transition-colors duration-300 hover:text-blue-800 hover:underline"><Link to="#">Study Material Status</Link></li>
                  <li className="mb-2 transition-colors duration-300 hover:text-blue-800 hover:underline"><Link to="#">Placement Assistance</Link></li>
                </ul>
              </div>

              {/* Column 4 */}
              <div className="w-full px-4 md:w-1/4">
                <h4 className="relative mb-8 text-xl font-semibold text-zinc-800">
                  Follow Us
                  <span className="block w-12 h-1 mt-2 bg-pink-600"></span>
                </h4>

                <div className="flex">
                  <a href="#" className="p-2 mr-3 text-white transition duration-300 bg-orange-600 rounded-full hover:bg-orange-500 hover:text-gray-800">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="p-2 mr-3 text-white transition duration-300 bg-gray-600 rounded-full hover:bg-white hover:text-gray-800">
                    <FaTwitter />
                  </a>
                  <a href="#" className="p-2 mr-3 text-white transition duration-300 bg-gray-600 rounded-full hover:bg-white hover:text-gray-800">
                    <FaInstagram />
                  </a>
                  <a href="#" className="p-2 text-white transition duration-300 bg-gray-600 rounded-full hover:bg-white hover:text-gray-800">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>


            <div className="w-full text-center">
              <p className="my-10 font-semibold text-center text-gray-700 border-t border-gray-300">© 2024 Student_Hub. All rights reserved.</p>
            </div>

            </div>

          </div>
        </footer>
    );
};

export default Footer;
