import React from "react";
import styled from 'styled-components'

const Coments = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

`

function Comments (props){

    return(
        <Coments>
            <p>{props.nome} : {props.body}</p>
            
        </Coments>
    )
}

export default Comments