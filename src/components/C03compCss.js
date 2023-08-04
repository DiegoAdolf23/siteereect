import React from "react"
import "./C03compCss.css"
import style from "./C03compCssObj"

const C03componenteConCss = () =>{
    return(
        <div className="marcoComponente">
            <h4>Componente 3 Con formas de definir estilos</h4>

            <button style={{backgroundColor:'green',color:'blue',padding:'3px'}}>
                Boton1 con estilos en la linea de atributos (Definido como objeto)
            </button>
            <hr/>
            <button >
                Boton 2 con estilos en archivos css(normal)
            </button>
            <br/>
            <button style={style.estilo1}>
                Boton 3 con estilos en archivos js(Definidocomo objeto)
            </button>
        </div>
    )
} 

export default C03componenteConCss