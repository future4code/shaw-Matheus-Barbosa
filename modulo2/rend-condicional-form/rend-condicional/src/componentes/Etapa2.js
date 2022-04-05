import React from 'react'
import styled from 'styled-components'

const Formulario = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

        input{
            margin:2em;
        }
    

`

class Etapa2 extends React.Component{
   
   
   
    render(){
        return(
            <Formulario>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <label>5. Qual curso?</label>
                <input />
                <label>2.Qual unidade de ensino?</label>
                <input />
               
                <button onClick={this.props.proximaPagina}>Proxima Pagina</button>
                
            </Formulario>
        )
    }
}

export default Etapa2