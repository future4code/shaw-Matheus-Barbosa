import React from "react"
import { useNavigate } from "react-router-dom"
import {goBack} from '../Routes/Coordinator'
import useSenhaProtegida from '../Constants/Hooks/useSenhaProtegida'



function CreateTripPage (){

    

    const navigate = useNavigate()

    useSenhaProtegida(false)

    return(
        <>
        <h1>Pagina Adicionar uma Viagem</h1>
        <button
        onClick={()=>goBack(navigate)}
        >Voltar</button>
        <button>Criar</button>
        </>
    )
}

export default CreateTripPage