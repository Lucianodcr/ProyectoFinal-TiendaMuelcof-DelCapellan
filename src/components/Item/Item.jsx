import { Link } from "react-router-dom";
import "./item.css"

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    
      <div className=" bg-[#f9f9f9] gap-2 tamimg m-2 ">
        <img className=" bg-white rounded-e-2xl p-8 rounded-full "
          
          src={img}
          alt={nombre}
        />
        
        <h3 className="text-center font-bold text-xl">{nombre}</h3>
        <p>Precio: $ {precio}</p>
        <p>ID: {id}</p>
        <p>Stock: {stock}</p>
        <Link  to={`/item/${id}`}>
          <div className="uppercase text-blue-500"> Ver detalles </div>
        </Link>
        </div>
        
  );
};

export default Item;
