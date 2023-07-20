import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

{
  /* icons */
}
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser, FaFilter } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const MobileNav = ({
  showMenu,
  handleHamburgerClick,
  showCartIcon,
  setShowCartIcon,
}) => {
  const toogleMenu = () => {
    handleHamburgerClick();
    setShowCartIcon(!showMenu);
  };

  const { totalAmount } = useContext(CartContext);

  return (
    <>
      {/*Menu para vista Mobile*/}
      <nav className="bg-[#afddb8ff] lg:hidden fixed w-full bottom-0 left-0 text-2xl py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <Link>
          <FaUser className="text-3xl h-8 w-14 m-3" />
        </Link>
        {showCartIcon && (
          <Link to="/cart" className="flex items-center">
            <FaCartShopping className="text-3xl h-8 w-14 m-3" />
            {totalAmount > 0 && (
              <div className=" flex text-center  bottom-8 text-gray-600 relative left-5 ">
                <strong className=" bg-red-600 rounded-full w-5 h-5 absolute right-5 text-white text-sm">
                  {totalAmount}
                </strong>
              </div>
            )}
          </Link>
        )}

        <Link>
          <FaFilter className="text-3xl h-8 w-14 m-3" />
        </Link>
        <Link onClick={toogleMenu} className="bg-white rounded-full">
          {showMenu ? (
            <IoClose className="text-3xl h-8 w-14 m-3" />
          ) : (
            <GiHamburgerMenu className="text-3xl h-8 w-14 m-3" />
          )}
        </Link>
      </nav>
    </>
  );
};

export default MobileNav;
