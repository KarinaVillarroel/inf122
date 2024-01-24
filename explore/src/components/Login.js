import React from "react";
import '../styles/Login.css';
import Boton from './Boton';


function Login ( ){
    return(
        <div className="padre">
        <div className="hijo">
           <form>
               <div className="usuario">
               <label>
                 Usuario:
               </label>
               </div>
               <div className="usuario">
                  <label>Usuario:</label>
                  <imput placeholder="ingresar usuario"></imput>
               </div>
               <div className="Contraseña">
                  <label>Contraseña:</label>
                  <imput placeholder="ingresar Contraseña"></imput>
               </div>
               <div className="buttones">
                <Boton funVlick={()=> click ("Registrar")} text="Resgistrar"/>
                    
               </div>
            </form> 
        </div>
        </div>
    );
}
export default Login;