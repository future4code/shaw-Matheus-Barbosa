import React from 'react';
import styled from 'styled-components'

const DivPequena = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 545px;

    img {
        width: 70px;
        margin-right: 10px;
        border-radius: 50%;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    }

`



function CardPequeno(props) {
    return (
        <DivPequena>
            <img src={ props.imagem } />
            <div>
                
                <p><strong>{ props.nome }</strong> { props.descricao }</p>
            </div>
        </DivPequena>
    )
}

export default CardPequeno;