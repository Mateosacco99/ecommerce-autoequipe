import { use, useEffect, useState } from 'react';

const ItemCount = () => {

    const [count, setCount] = useState(1);
    const [comprar, setComprar] = useState(false);
    const sumar = () => {
        setCount(count + 1);
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const handleComprar = () => {
        setComprar(!comprar);
    }

    useEffect(() => {
        console.log("Este se ejecuta solo una vez al montar el componente y siempre que compra cambie");
    }, [comprar])

    return (
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
            <button onClick={handleComprar}>{comprar ? "Cancelar" : "Comprar"}</button>
        </div>
    );
}

export default ItemCount;