import React from 'react'
import Etapa1 from './componentes/Etapa1'
import Etapa2 from './componentes/Etapa2';
import styled from 'styled-components'
import Final from './componentes/Final';
import Etapa3 from './componentes/Etapa3';





export default class App extends React.Component {
  state = {
    pag: 0
  };

  mudaPagina = () => {
    this.setState({ pag: this.state.pag + 1 });
  };
  

  render() {
    let pagina = <h3> Página não encontrada </h3>;
    if (this.state.pag === 0) {
      pagina = <Etapa1 proximaPagina={this.mudaPagina}/>;
    }
    if (this.state.pag === 1) {
      pagina = <Etapa2 proximaPagina={this.mudaPagina}/>;
    }
    if (this.state.pag === 2) {
      pagina = <Etapa3 proximaPagina={this.mudaPagina}/>;
    }
    if (this.state.pag === 3) {
      pagina = <Final />;
    }
    
    return (
      <div>
        {pagina}
      </div>
      
    );
  }
}