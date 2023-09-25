import React, { useContext, useState } from 'react';

/**
 * 
 * @returns CompContext
 * dispone de un contexto q va a tener un valor q recibe desde el padre
 */
const miContexto = React.createContext(null);

const Component1 = () => {
    
    const state = useContext(miContexto)
    return (
        <div>
            <h1> El token es: {state.token}</h1>
            <Component2></Component2>
        </div>
    );
}



const Component2 = () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h2>La sesion es: {state.sesion}</h2>
        </div>
    );
}



const MiCompConContexto = () => {
    
    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }
    const [sesionData, setsesionData] = useState(estadoInicial);
    
    function actualizarSesion() {
        setsesionData({
            token:'fffoo',
            sesion: sesionData.sesion + 1
        })
    }

    

    return (
        <div>
            <miContexto.Provider value={sesionData}>
                <Component1></Component1>
                <button onClick={actualizarSesion}> actualizar Sesion</button>
            </miContexto.Provider>
        </div>
    );
}

export default MiCompConContexto 



