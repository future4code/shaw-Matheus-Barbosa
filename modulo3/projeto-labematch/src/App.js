
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardImg from './components/Card'
import Match from './components/Match';
import styled from 'styled-components'

const Tela=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`

function App() {




  
  return (
   <Tela>
    <Match />

     
   </Tela>
   
  
  );
}

export default App;
