import { GrFormSearch } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="lg:pl-28 grid grid-cols-1 lg:grid-cols-full ">
      <div>
        <header className="p-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <div>
              <Link to="/">
                <img
                  className="w-30 h-20"
                  src="../img/logonav.webp"
                  alt="logonav"
                />
              </Link>
              <h1 className="flex items-center justify-center text-center text-2xl  pb-4 pt-4 ">
                Bienvenido a tu tienda!
              </h1>
            </div>

            <form action="">
              <div className="w-full relative">
                <GrFormSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl" />
                <input
                  type="text"
                  className="bg-white rounded-full border-2 border-[#afddb8ff] w-full py-2 pl-10 pr-4 outline-none "
                  placeholder="Buscar"
                />
              </div>
            </form>
          </div>

          <nav className="flex items-center justify-center gap-10 mb-6 text-center">
            <NavLink
              to="/categoria/masc"
              className="py-2 font-semibold uppercase  border-[#afddb8ff] border-b-2"
            >
              Perfumes Masculinos
            </NavLink>
            <NavLink
              to="/categoria/fem"
              className="border-b py-2 font-semibold uppercase"
            >
              Perfumes Femeninos
            </NavLink>
          </nav>
        </header>

        <div className="flex items-center justify-between lg:px-6">
          <button className="flex items-center font-semibold gap-4 bg-[#afddb8ff] rounded-full py-2 px-4">
            Aplicar filtro
            <FaAngleDown />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
