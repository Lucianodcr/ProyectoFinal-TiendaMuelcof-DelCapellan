import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div className="flex flex-col  p-8" >
      <div className="lg:pl-28 grid sm:grid-col-1 md:grid-cols-3 lg:grid-cols-8 mt-8 text-center text-1xl">
        {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    </div>
  )
}

export default ItemList;
