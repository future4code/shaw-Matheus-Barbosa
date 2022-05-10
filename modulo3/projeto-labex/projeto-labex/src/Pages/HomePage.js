import React from "react";
import {useNavigate} from 'react-router-dom'
import {goToPage} from '../Routes/Coordinator'
import{listTrips,loginPage} from '../Constants/constantes'
import styled from 'styled-components'

const Principal = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: lightblue;
    height: 50em;
    width: 100%;

    h1{
        margin: 1em;
        color: darkblue;
    }
    div{
        margin: 5em;
    }
    button{
        width: 12em;
        height: 3em;
        background-color: lightgray;

    }

`


function HomePage (){

    const navigate = useNavigate()

    return(
        <Principal>
        <h1>LabeX</h1>
        <div>
        <button
        onClick={()=>goToPage(navigate,listTrips)}
        >Lista De Viagens</button>
        <button
        onClick={()=> goToPage(navigate,loginPage)}
        >Login</button>
        </div>
        </Principal>
    )
}

export default HomePage