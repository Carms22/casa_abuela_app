import React, { Children, useState } from 'react';
import Child from '../pure/child';

const Father = () => {
    const[name, setName] =useState('nada')

    function updateName(name){
        setName(name)
    }
    return (
        <div>
            <Child name= {name} update={updateName}/>
        </div>
    );
}

export default Father;
