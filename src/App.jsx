import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

{
  /*Icons*/
}

import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser, FaFilter } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <BrowserRouter>
        <SideBar showMenu={showMenu} />
        <NavBar />
        {/*Menu para vista Mobile*/}
        <nav className="bg-[#afddb8ff] lg:hidden fixed w-full bottom-0 left-0 text-2xl py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
          <button>
            <FaUser className="text-3xl h-8 w-14 m-3" />
          </button>
          <button>
            <FaCartShopping className="text-3xl h-8 w-14 m-3" />
          </button>
          <button>
            <FaFilter className="text-3xl h-8 w-14 m-3" />
          </button>
          <button onClick={toogleMenu} className="bg-white rounded-full">
            {showMenu ? (
              <IoClose className="text-3xl h-8 w-14 m-3" />
            ) : (
              <GiHamburgerMenu className="text-3xl h-8 w-14 m-3" />
            )}
          </button>
        </nav>
        <Routes>
          <Route path="/" element={ <ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={ <ItemListContainer/>}/>
          <Route path="/item/:idItem" element={ <ItemDetailContainer />} />
          <Route path="*" element={<h2> Sitio en construcción </h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
