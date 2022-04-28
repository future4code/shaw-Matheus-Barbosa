import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from '../Routes/Coordinator'


function ApplicationFormPage (){
    
    const navigate = useNavigate()

    return(
        <>
        <h1>Pagina Aplicar para uma viagem</h1>
        <button
        onClick={()=>goBack(navigate)}
        >Voltar</button>
        <button>Enviar</button>
        </>
    )
}

export default ApplicationFormPage