import React from 'react';

function Boton(props){
    return(
        <div
        className={ `boton-` }
        >
           {props.children}
        </div>
    )
}

export default Boton;