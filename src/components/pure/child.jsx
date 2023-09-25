import React, { useRef, useState } from 'react';

const Child = ({ name, update }) => {

    const[text, setText] = useState('default text')
    const nameRef = useRef('Pato')

    function pressButton(){
        console.log('Simple press button');
    }
    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }
    function onChangeText(event){
        setText(event.target.value)
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div>
            <p>Child component {name}</p>
            <button className='p-1 m-2' onClick={pressButton}>Simple Press</button>
            <button className='p-1 m-2' 
                onClick={() => pressButtonParams (text)}
                >
                Press Params
            </button>
            <input 
                placeholder='Introduce texto' 
                onChange={ (event) => console.log(event.target.value)}/>
            <input placeholder='texto q va a la alerta' 
                onChange={ onChangeText }/>
            <div>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='Write your name'/>
                    <button type='submit'>Submit Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
