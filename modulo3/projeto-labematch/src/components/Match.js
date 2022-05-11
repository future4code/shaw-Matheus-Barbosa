import { useEffect, useState } from 'react';
import styled from 'styled-components'
import CardImg from "./Card";
import axios from 'axios';

const Tela=styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 650px;
    border-style: solid;
    justify-content: space-around;

    .botoes{
        align-self: center;
        justify-self: end;
    }


`
const Cabecalho = styled.div`
    display: flex;
    align-items: center;
    height: auto;
    justify-content: space-between;
    padding: 20px;
    
`

function Match (props){
    let [usuario,setUsuario] = useState({})
    let [curtindo,setCurtir] = useState(false)
    

    useEffect(()=>{
      axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-lima/person").then((res)=>{
        setUsuario(res.data.profile)
      }).catch((err)=>{
        console.log(err)
      })
    },[curtindo])

    const darMatch = (elemento) =>{

      setCurtir(!curtindo)

      let body ={
        "id": usuario.id,
	      "choice": elemento
      }

      axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-lima/choose-person",body).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }

    return(

        <>
         <Tela>
             <Cabecalho>
                <h1>AstroMatch</h1>
                <button
                onClick={()=>props.escolheTela("deuMatch")}
                >Matches</button>
             </Cabecalho>
            <CardImg 
            name={usuario.name}
            age={usuario.age}
            photo={usuario.photo}
            bio={usuario.bio}
            />

            <div className='botoes'>
            <button
            onClick={() => darMatch(true)}
            >curtir</button>
            <button
            onClick={() => darMatch(false)}
            >Nao curtir</button>
            </div>
         </Tela>
        </>
    )
}

export default Match