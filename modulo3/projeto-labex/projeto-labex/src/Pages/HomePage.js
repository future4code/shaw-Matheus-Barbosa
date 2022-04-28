import React from "react";
import {useNavigate} from 'react-router-dom'
import {goToPage} from '../Routes/Coordinator'
import{listTrips,loginPage} from '../Constants/constantes'


function HomePage (){

    const navigate = useNavigate()

    return(
        <>
        <h1>Esta é a Pagina de Login</h1>
        <button
        onClick={()=>goToPage(navigate,listTrips)}
        >Lista De Viagens</button>
        <button
        onClick={()=> goToPage(navigate,loginPage)}
        >Login</button>
        </>
    )
}

export default HomePage