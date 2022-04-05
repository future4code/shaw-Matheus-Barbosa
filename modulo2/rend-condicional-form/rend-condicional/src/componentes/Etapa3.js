import React from 'react'
import styled from 'styled-components'

const Formulario = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

        input{
            margin:2em;
        }
        button{
            margin: 1em;
        }
        select{
            margin: 1em;
        }
    

`

class Etapa3 extends React.Component{
   
   
   
    render(){
        return(
            <Formulario>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <label>5. Por que você não terminou um curso de graduação?</label>
                <input />
                <label>6. Você fez algum curso complementar?</label>
                <select>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                </select>
                
                <button onClick={this.props.proximaPagina}>Proxima Pagina</button>
            </Formulario>
        )
    }
}

export default Etapa3