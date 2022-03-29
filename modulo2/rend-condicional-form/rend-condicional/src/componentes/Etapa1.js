import React from 'react'
import styled from 'styled-components'

const Formulario = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;

        input{
            margin:2em;
        }
        select{
            margin:2em;
        }

`

class Etapa1 extends React.Component{
   
   
   
    render(){
        return(
            <Formulario>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <label>1.Qual o seu nome?</label>
                <input />
                <label>2.Qual sua idade?</label>
                <input />
                <label>3.Qual seu email?</label>
                <input/>
                <label>Qual a sua escolaridade?</label>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Superior incompleto</option>
                    <option>Superior Completo</option>
                </select>

                <button onClick={this.props.proximaPagina}>Proxima Pagina</button>
            </Formulario>
        )
    }
}

export default Etapa1