import {useEffect, useState} from "react";


const BtnProd = (BtnProd) => {
    }
const Agregar = (Agregar) => {
}
const Quitar = (Quitar) => {
};
const BtnProdContainer = (BtnProdContainer) => {

}

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect (() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
        
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <BtnProdContainer>
            <button onClick={increment}><Agregar /></button>
            <BtnProd>{count}</BtnProd>
            <button onClick={decrement}><Quitar /></button>
        
            {
            stock
            ? <button onClick={() => onAdd(count)}>Envía al Carro</button>
            : <button>Envía al Carro</button>
        }
        </BtnProdContainer>
            
    );
}

export default ItemCount;