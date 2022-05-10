import React from "react";
import styled from 'styled-components'

const Carta = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-style: solid;
    border-width: 1px;
    width: 20em;
    margin: 1em;
    background-color: lightcyan;
    
`

function Card (props){

    return(
        <Carta>
            <h4>{props.nome}</h4>
            <p>{props.descricao}</p>
            <p>{props.planeta}</p>
            <p>{props.duracao} Dias</p>
            <p>{props.data}</p>
        </Carta>
    )
}

export default Card