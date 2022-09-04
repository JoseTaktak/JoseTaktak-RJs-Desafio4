import ItemCount from "./ItemCount";


const ItemListContainer = () => {

  const onAdd = (qty) => {
    alert("Seleccionaste " + qty + " items.");
  }

  return (
      <div>
        <hr />
       <h1>Estás en Mundo Fiesta, Bienvenido!!!!</h1>
       <hr/>
       <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </div>
      );
      
  }
  
  export default ItemListContainer;