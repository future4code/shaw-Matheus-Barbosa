import React from 'react'
import styled from 'styled-components'

const Formulario = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    

`

class Final extends React.Component{
   
   
   
    render(){
        return(
            <Formulario>
                <h3>O FORMULARIO ACABOU</h3>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
                
               
            </Formulario>
        )
    }
}

export default Final