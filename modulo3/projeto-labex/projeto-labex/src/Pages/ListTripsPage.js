import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {goBack,goToPage} from '../Routes/Coordinator'
import {applicationPage} from '../Constants/constantes'
import styled from 'styled-components'
import axios from "axios";
import Card from "./Card/Card";


const Cabecalho = styled.div`
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        margin-right: 2em;
    }
    h1{
        margin-left: 2em;
        color: darkblue;
    }
`
const Lista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgrey;
`





function ListTripsPage (){

    const navigate = useNavigate()
    const [viagens,setViagens] = useState([])

    useEffect(()=>{

        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-lima-shaw/trips").then((res)=>{
        
            setViagens(res.data.trips)
        }).catch((err)=>{
            console.log("erro")
        })
    },[])

    const listaDeViagens = viagens.map((elemento)=>{
        return (
            <Card 
                nome={elemento.name}
                descricao={elemento.description}
                planeta={elemento.planet}
                duracao={elemento.durationInDays}
                data={elemento.date}
                id={elemento.id}
            />
        )
    })



    return(
        <>
        <Cabecalho>
        <h1>Lista de Viagens</h1>
        <div>
        <button
        onClick={()=>goBack(navigate)}
        >Voltar</button>
        <button
        onClick={()=>goToPage(navigate,applicationPage)}
        >Inscrever-se</button>
        </div>
        </Cabecalho>
        <Lista>
            {listaDeViagens}
        </Lista>
        </>
    )
}

export default ListTripsPage