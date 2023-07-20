import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center sm:pb-20 lg:pl-20">
      <div className="p-8 gap-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {productos.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
