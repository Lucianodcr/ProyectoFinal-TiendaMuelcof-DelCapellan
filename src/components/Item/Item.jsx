import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  return (
    
      <div className="lg:col-span-3 bg-[#f9f9f9] m-5 rounded-xl mt-5 mb-5 ">
        <img className="w-25 h-25 bg-white rounded-full mt-5 mb-5 p-8"
          
          src={img}
          alt={nombre}
        />
        <div className="p-5">
        <h3 className="text-center font-bold">{nombre}</h3>
        <p>$ {precio}</p>
        <p>ID: {id}</p>
        <Link  to={`/item/${id}`}>
          <div className="uppercase text-blue-500"> Ver detalles </div>
        </Link>
        </div>
      </div>
   
  );
};

export default Item;
