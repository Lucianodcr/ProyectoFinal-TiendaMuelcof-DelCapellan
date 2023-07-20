import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
{
  /*Icons*/
}
import { ImHome, ImOpt } from "react-icons/im";
import { TbPerfume } from "react-icons/tb";
import { GiDelicatePerfume } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { SlLogout } from "react-icons/sl";
import { FaCartShopping } from "react-icons/fa6";

const SideBar = ({showMenu, showCartIcon}) => {

  const { totalAmount } = useContext(CartContext);

  return (
    <div
      className={`bg-[#afddb8ff] transition-all ${
        showMenu ? "left-0" : "-left-full"
      } lg:left-0 z-50 fixed top-0 w-28 h-full flex flex-col justify-between py-3 rounded-tr-xl rounded-br-xl`}
    >
      <div className="w-30 h-30">
        <h1 className="text-center m-1">
          <img
            className="flex items-center justify-center rounded-es-full rounded-se-full bg-white"
            src="../img/muelcofSideBar.webp"
            alt="logosidebar"
          />
        </h1>
        <ul className="pl-4 py-5">
          <li className="bg-white p-4 rounded-tl-xl rounded-bl-xl">
            <Link
              to="/"
              className="bg-[#afddb8ff] p-4 flex justify-center rounded-xl"
            >
              <ImHome className="text-2xl" />
            </Link>
          </li>

          <li className="hover:bg-white p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <NavLink
              to="/categoria/masc"
              className="group-hover:text-black p-4 flex justify-center rounded-xl text-white transition-colors"
            >
              <TbPerfume className="text-3xl" />
            </NavLink>
          </li>

          <li className="hover:bg-white p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <NavLink
              to="/categoria/fem"
              className="group-hover:text-black p-4 flex justify-center rounded-xl text-white transition-colors"
            >
              <GiDelicatePerfume className="text-3xl" />
            </NavLink>
          </li>
          {showCartIcon &&(
          <li className="hover:bg-white p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <Link
              to="/cart"
              className="group-hover:text-black p-4 flex justify-center rounded-xl text-white transition-colors"
            >
              <FaCartShopping className="text-3xl relative" />
              {totalAmount > 0 && (
                <div className="relative box-content w-1 bottom-3 left-0 text-gray-600">
                  <strong className=" bg-red-600 rounded-full flex w-5 h-5 justify-center text-white text-sm">
                    {totalAmount}
                  </strong>
                </div>
              )}
            </Link>
          </li>
          )}
          <li className="hover:bg-white p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <NavLink
              to="/"
              className="group-hover:text-black p-4 flex justify-center rounded-xl text-white transition-colors"
            >
              <AiOutlineMail className="text-3xl" />
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-white p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <NavLink
              to="/"
              className="group-hover:text-black flex justify-center rounded-xl text-white transition-colors"
            >
              <SlLogout className="text-2xl" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
