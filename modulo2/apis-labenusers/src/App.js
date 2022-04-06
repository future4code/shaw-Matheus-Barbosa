
import React from 'react';
import styled from 'styled-components';
import Cadastro from './components/Cadastro';
import Usuarios from './components/Usuarios';

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class App extends React.Component {

  state ={
    tela: "usuarios"
  }

  cadastro = () =>{
    const novo = "cadastro"
    this.setState({tela:novo})
  }

  usuarios = () => {
    const novo = "usuarios"
    this.setState({tela:novo})
   
  }

  render(){

    let imprimeTela 

      if (this.state.tela === "usuarios"){
        imprimeTela = <Usuarios />
      }else{
        imprimeTela = <Cadastro />
      }

      
 
  

  return (
    <div>
      <Menu>
        <button 
        onClick={this.cadastro}
        >Cadastro</button>

        <button
        onClick={this.usuarios}
        >Usuarios</button>
      </Menu>

      <hr />
      
      {imprimeTela}    
      
    </div>
  )
}
}


