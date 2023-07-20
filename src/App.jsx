import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import MobileNav from "./components/MobileNav/MobileNav";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { useState, useEffect } from "react";
import ItemCount from "./components/ItemCount/ItemCount";


const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showCartIcon, setShowCartIcon] = useState(true)

  const handleHamburgerClick = () => {
    setShowSideBar(!showSideBar);
    setShowCartIcon(showSideBar);
  }

  useEffect(() => {
    
    const handleWindowResize = () => {
      const isDesktopView = window.innerWidth >= 1024;      
      setShowCartIcon(isDesktopView);
    };

    
    window.addEventListener("resize", handleWindowResize);
    
    handleWindowResize();
    
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);



  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <SideBar showMenu={showSideBar} showCartIcon={showCartIcon} />
        <MobileNav  showMenu={showSideBar}
            handleHamburgerClick={handleHamburgerClick}
            showCartIcon={!showCartIcon}
            setShowCartIcon={setShowCartIcon} />
          <NavBar />
          
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="*" element={<h2> Sitio en construcción </h2>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
