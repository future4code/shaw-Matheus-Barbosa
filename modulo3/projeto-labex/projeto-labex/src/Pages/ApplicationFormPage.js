import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from '../Routes/Coordinator'

const Formulario = styled.div`
  display: flex;
`

function ApplicationFormPage (){
    
    const navigate = useNavigate()

    return(
        <>
        <h1>Aplicar para uma viagem</h1>
        <button
        onClick={()=>goBack(navigate)}
        >Voltar</button>
        <button>Enviar</button>
        </>
    )
}

export default ApplicationFormPage