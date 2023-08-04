import React from "react";
import C01componente from "./components/C01componente";
import C02contador from "./components/C02contador";
import C03componenteConCss from "./components/C03compCSS";
import Componente from "./components/P01componente";
import Contador from "./components/P02estado";
import Contador2 from "./components/P03dobleestado";
import Variable from "./components/P04variable";
import Matriz from "./components/P06matriz";
import MatrizOperaciones from "./components/P07matrizOperaciones";

function App  (){
  return (
    <div className="App">
      <h1>Practicas ... React</h1>
      <Componente/>
      <hr/>
      <Contador/>
      <hr/>
      <Contador2/>
      <hr/>
      <Variable xVariable="Lectura de variables"/>
      <hr/>
      <Matriz/>
      <hr/>
      <MatrizOperaciones/>
      <hr/>
      <C01componente/>
      <hr/>
      <C02contador/>
      <hr/>
      <C03componenteConCss/>
    </div>
  );
}

export default App;
