import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import {goToPage,goBack} from '../Routes/Coordinator'
import {baseUrl} from '../Constants/constantes'
import axios from "axios";
import {adminPage} from '../Constants/constantes'
import useSenhaProtegida from "../Constants/Hooks/useSenhaProtegida";


function LoginPage (){

    const [email,setEmail] = useState()
    const [senha,setSenha] = useState()

    const navigate = useNavigate()


    const enviarLogin = () =>{

        const url = `${baseUrl}/login`
        const body ={
            "email": email,
            "password": senha
        }

        axios.post(url,body).then((res)=>{
            localStorage.setItem("token",res.data.token)
            goToPage(navigate,adminPage)
        }).catch((err)=>{
            console.log(err.response)
        })
    }

    useSenhaProtegida(true)




    return(
        <>
        <h1>Pagina de Login</h1>

        <input placeholder="E-mail" value={email} onChange={(event)=>setEmail(event.target.value)}/>
        <input placeholder="Senha" value={senha} onChange={(event)=>setSenha(event.target.value)}/>
        <button
        onClick={()=>goBack(navigate)}
        >Voltar</button>
    
        <button
        onClick={enviarLogin}
        >Enviar</button>
        </>
    )
}

export default LoginPage