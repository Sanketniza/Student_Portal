
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';  // import icons

const Footer = () => {
  return (
         <footer className="w-7xl mx-auto">
          <div className=" container ">

            <div className="flex flex-wrap mx-28">
              {/* Column 1 */}
              <div className=" md:w-1/4 px-4 mb-12 md:mb-0">
                <h4 className="text-xl text-zinc-800 font-semibold mb-8 relative">
                  Student_Hub
                  <span className="block bg-pink-600 h-1 w-12 mt-2"></span>
                </h4>
                <ul className="text-gray-700 ">
                  <li className="mb-2 hover:text-blue-800 hover:underline transition-colors duration-300"><Link to="#">About us</Link></li>
                  <li className="mb-2 hover:text-blue-800 hover:underline transition-colors duration-300"><Link to="#">Contact us</Link></li>
                  <li className="mb-2 hover:text-blue-800 hover:underline transition-colors duration-300"><Link to="#">Privacy policy</Link></li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className=" md:w-1/4 px-4 mb-12 md:mb-0">
                <h4 className="text-xl text-zinc-800 font-semibold mb-8 relative">
                  Get Help
                  <span className="block bg-pink-600 h-1 w-12 mt-2"></span>
                </h4>
                <ul className="text-gray-700">
                  <li className="mb-2 hover:text-blue-800 hover:underline transition-colors duration-300"><Link to="#">FAQ</Link></li>
                  <li className="mb-2 hover:text-blue-800 hover:underline transition-colors duration-300"><Link to="#">Courses</Link></li>
                  <li className="mb-2 hover:text-blue-800 hover:underline transition-colors duration-300"><Link to="#">Branches</Link></li>

                </ul>
              </div>

              {/* Column 3 */}
              <div className=" md:w-1/4 px-4 mb-12 md:mb-0">
                <h4 className="text-xl text-zinc-800 font-semibold mb-8 relative">
                  Student Section
                  <span className="block bg-pink-600 h-1 w-12 mt-2"></span>
                </h4>
                <ul className="text-gray-700">
                  <li className="mb-2 hover:text-blue-800 hover:underline transition-colors duration-300"><Link to="#">Student Grievances</Link></li>
                  <li className="mb-2 hover:text-blue-800 hover:underline transition-colors duration-300"><Link to="#">Study Material Status</Link></li>
                  <li className="mb-2 hover:text-blue-800 hover:underline transition-colors duration-300"><Link to="#">Placement Assistance</Link></li>
                </ul>
              </div>

              {/* Column 4 */}
              <div className="w-full md:w-1/4 px-4">
                <h4 className="text-xl text-zinc-800 font-semibold mb-8 relative">
                  Follow Us
                  <span className="block bg-pink-600 h-1 w-12 mt-2"></span>
                </h4>

                <div className="flex">
                  <a href="#" className="text-white bg-orange-600 p-2 rounded-full mr-3 hover:bg-orange-500 hover:text-gray-800 transition duration-300">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-white bg-gray-600 p-2 rounded-full mr-3 hover:bg-white hover:text-gray-800 transition duration-300">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-white bg-gray-600 p-2 rounded-full mr-3 hover:bg-white hover:text-gray-800 transition duration-300">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-white bg-gray-600 p-2 rounded-full hover:bg-white hover:text-gray-800 transition duration-300">
                    <FaLinkedinIn />
                  </a>
                </div>

              </div>

            </div>

            <div>
              <p className="text-gray-700 font-semibold text-center my-10 border-t border-gray-300">© 2024 Student_Hub. All rights reserved.</p>
            </div>

          </div>
        </footer>
    );
};

export default Footer;
