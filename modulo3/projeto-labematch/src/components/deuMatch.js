import { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const ListaDeMatches = styled.div`
    display: flex;
    flex-direction: column;

        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 20px;
            margin-left: 10px;
        }

        div{
            display: flex;
        }
`
const Cabecalho = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    

    div{
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        
        button{
            margin:50px;
        }
    }
    
`
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


function DeuMatch(props){

    let [matches,setMatches] = useState([])
    let [listaLimpa,setListaLimpa] = useState(true)

    useEffect(()=>{

        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-lima/matches"
        ).then((res)=>{
            setMatches(res.data.matches)

        }).catch((err)=>{
            console.log(err)
        })

    },[listaLimpa])

    const limparLista = () =>{
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-lima/clear").then((res)=>{
            setListaLimpa(!listaLimpa)
        }).catch((err)=>{
            console.log(err)
        })

    }
    const lista = matches.map((elemento)=>{
        return (
            
                <div>
                    <img src={elemento.photo} />
                    <p>{elemento.name}</p>
                </div>
        
        )
    })
    console.log(matches)

    return(
        <Tela>
        <Cabecalho>
            <div>
                <h1>AstroMatch</h1>
                <button
                onClick={()=>props.escolheTela("match")}
                >Inicio</button>
            </div>
                
            <button
            onClick={limparLista}
            >Apagar Lista</button>
                
        </Cabecalho>
        <ListaDeMatches>
        {lista}
        </ListaDeMatches>
        
        </Tela>
    )
}

export default DeuMatch