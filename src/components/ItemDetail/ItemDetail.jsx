

const ItemDetail = ({ id, nombre, precio, img }) => {
 
  return (
  
    
    <div className="flex flex-row text-center justify-center bg-gray-100 mt-10 mb-10 rounded-bl-full rounded-ss-full">
      <img src= {img} alt= {nombre} />
      <div className=" flex  flex-col text-center justify-center">
        <h3> {nombre} </h3>
        <p > $ {precio} </p>
        <p> {id}</p>
        
      </div>
    </div>
  );
};

export default ItemDetail;
