
import { useEffect, useState } from 'react';
import Match from './components/Match';
import styled from 'styled-components'
import DeuMatch from './components/deuMatch';

const Tela=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`

function App() {

  const [telaAMostra,setTelaAMostra] = useState()

  let mostrarTela 
  
  switch(telaAMostra){
    case "match":
      return mostrarTela = <Match escolheTela={setTelaAMostra}/>
    case "deuMatch":
      return mostrarTela = <DeuMatch escolheTela={setTelaAMostra}/>
    default:
      return mostrarTela = <Match escolheTela={setTelaAMostra}/>
  }
  
  return (
   <Tela>
     {mostrarTela}
   </Tela>
  );
}

export default App;
