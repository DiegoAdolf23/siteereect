import React, {useState, Fragment} from "react";

const Matriz =() =>{
    const [lista,setLista] = useState([1,2,3,4,5]);
    return (
        <Fragment>
            <h1>Lectura sin Index y sin HtML</h1>
            {lista.map((item)=> item)}
            <br/>
            <h1>Lectura sin Index y con HtML</h1>
            {lista.map((item)=> <span>{item}</span>)}
            <br/>
            <h1>Listas con index y Sin key</h1>
            {
               lista.map((item,index)=>
                    <p>{item}</p>
                ) 
            }
            <br/>
            <h1>Listas con Index y con Key</h1>
            {
                lista.map((item,index)=>
                    <p key= {index}>
                        {item}={index}
                    </p>
                ) 
            }
            <br/>
        </Fragment>
    );
}

export default Matriz;