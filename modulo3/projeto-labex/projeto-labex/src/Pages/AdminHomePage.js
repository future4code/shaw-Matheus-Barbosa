import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {goToPage,goBack} from '../Routes/Coordinator'
import {createTrip} from '../Constants/constantes'
import useSenhaProtegida from '../Constants/Hooks/useSenhaProtegida'



function AdminHomePage (){

    const navigate = useNavigate()

    
    useSenhaProtegida(false)
    
    const logout = () =>{
        localStorage.removeItem("token")
        goBack(navigate)
    }
   

    return(
        <>
        <h1>Pagina Home do Admin</h1>
        <button
        onClick={()=>goBack(navigate)}
        >Voltar</button>
        <button
        onClick={()=>goToPage(navigate,createTrip)}
        >Criar Viagem</button>
        <button
        onClick={logout}
        >Logout</button>
        </>
    )
}

export default AdminHomePage