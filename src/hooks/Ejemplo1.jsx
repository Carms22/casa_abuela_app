import React, { useEffect, useRef, useState } from 'react';

const Ejemplo1 = () => {
    const [ contador1, setContador1] = useState(0)
    const [contador2, setContador2]=useState(0)
    const miRef = useRef()
    const incrementar1 = () =>{
        setContador1(contador1 +1)
    }
    const incrementar2 = () =>{
        setContador2(contador2 +1)
    }
    useEffect(() => {
        console.log( 'estoy dando a 2')
       console.log(miRef)
    }, [contador2]);
   

    return (
        <div>
            <h1>
                Ejemplo1
            </h1>
            <h2> Contador 1: {contador1}</h2>
            <button onClick={incrementar1}> Contador1 + 1</button>
            <h2> Contador 2: {contador2}</h2>
            <button onClick={incrementar2}> Contador2 + 1</button>
            <h4 ref = {miRef}> mi ref:</h4>
        </div>
    );
}

export default Ejemplo1;
