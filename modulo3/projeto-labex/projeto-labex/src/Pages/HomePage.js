import React from "react";
import {useNavigate} from 'react-router-dom'
import {goBack,goToPage} from '../Routes/Coordinator'



function HomePage (){

    const navigate = useNavigate()

    return(
        <>
        <h1>Esta é a Pagina de Login</h1>
        <button
        onClick={()=>goToPage(navigate,"listTrips")}
        >Lista De Viagens</button>
        <button
        onClick={()=> goToPage(navigate,"login")}
        >Login</button>
        </>
    )
}

export default HomePage