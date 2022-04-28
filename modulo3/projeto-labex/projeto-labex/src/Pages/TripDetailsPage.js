import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from '../Routes/Coordinator'
import useSenhaProtegida from '../Constants/Hooks/useSenhaProtegida'


function TripDetailsPage (){
    const navigate = useNavigate()

    useSenhaProtegida(false)

    return(
        <>
        <h1>Detalhes da Viagem</h1>
        <button
        onClick={()=>goBack(navigate)}
        >Voltar</button>
        </>
    )
}

export default TripDetailsPage