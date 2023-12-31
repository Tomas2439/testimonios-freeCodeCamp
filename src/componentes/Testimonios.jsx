import React from "react";

import "../estilos/Testimonios.css"
function Testimonio(props){
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../imagenes/${props.imagen}.png`)} alt={`foto de ${props.nombre}`}></img>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{props.nombre}</strong> en <strong>{props.pais}</strong></p>
                <p className="cargo-testimonio"><strong>{props.cargo}</strong> en <strong>{props.empresa}</strong></p>
                <p className="texto-testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    );
}
export default Testimonio;