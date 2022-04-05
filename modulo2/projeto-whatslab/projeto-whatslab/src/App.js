import React from "react";
import styled from 'styled-components'

const Conteudo = styled.div`
    border-width: 5px;
    border-color: black;
    border-style: double;
    display: grid;
    grid-template-rows: 25fr 1fr;
    align-items: center;
    width: 50%;
    margin: 0 auto;
    background-color: aliceblue;
    overflow-y: scroll;

    

        .inputs{
            display: grid;
            grid-template-columns: 1fr 4fr 1fr;
            align-items: center;
            justify-content: center;
            
        }
        .mensagens{
            display: grid;
            align-self:flex-end;
            grid-template-columns: 1fr;
            row-gap:-3em;    
            
        }
       
       
      
`





class WhatsLab extends React.Component {
  state = {
   
    mensagens: [
 
    ],
   
    valorInputPessoa: "",
    valorInputMensagem: "",
    
  };

  adicionaMensagem = () => {
        const novaMsg = {
      
      nome: this.state.valorInputPessoa,
      msg: this.state.valorInputMensagem,
    };
    const arrayMsg = [...this.state.mensagens, novaMsg];

    this.setState({ mensagens: arrayMsg });
  };

  onChangeInputPessoa = (event) => {
    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };
 

  render() {
    
    
    const listaDeComponentes = this.state.mensagens.map((elem) => {
      return (
        
        <p>
          
          <strong>{elem.nome}</strong>: {elem.msg}
        </p>
        
      
      );
    });

    return (
      <Conteudo>
        <div className="mensagens">{listaDeComponentes}</div>
        
        <div className="inputs">
          <input
            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
         
          <button onClick={this.adicionaMensagem}>Enviar</button>
        </div>
        
      </Conteudo>
    );
  }
}

export default WhatsLab;
