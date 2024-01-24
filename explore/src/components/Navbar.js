import React from "react";
import {link} from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <link to="/">Inicio</link>
                </li>
                <li>
                    <link to="/">Login</link>
                </li>
                <li>
                    <link to="/">Registro</link>
                </li>
                <li>
                    <link to="/">Perfil</link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;