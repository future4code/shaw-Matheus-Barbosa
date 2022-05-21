import React, { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { base } from "../constants/BASE_URL";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../Routes/Coordinator";
import useSenha from "./useSenha";


const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

        h1{
            color: red;
            margin: 0.5em 0;
            padding: 0 0;
        }    
        p{
            margin-top: 0 ;
        }
        input{
            margin: 0.5em 0;
        }
        button{
            margin: 0.5em 0;
        }
        .login{
            width: 10em;
            height: 2em;
            border-radius: 10%;
            border-style: none;
            background-color: orange;
        }

        .cadastro{
            width: 10em;
            height: 2em;
            border-radius: 10%;
            border-style: none;
            background-color: orange;
        }

       


`

function PaginaLogin(){

    const [login,setLogin] = useState("")
    const [senha,setSenha] = useState("")

    const navigate = useNavigate()
    
    const onClickLogin = ()=>{
        
        const body = {
            "email": login,
            "password": senha      
        }

        axios.post(`${base}/users/login`,body).then((res)=>{
            localStorage.setItem("token",res.data.token)
            goToPage(navigate,'feed')

        }).catch((err)=>{
            alert(err.response.data)
        })


    }

    
    

    return(
        <Pagina>
            <h1>Labeddit</h1>
            <p>A rede Social da Labenu</p>
            <input 
            placeholder="Nome"
            value={login}
            onChange={(event)=>setLogin(event.target.value)}
           />
           <input 
            placeholder="Senha"
            value={senha}
            onChange={(event)=>setSenha(event.target.value)}           
           />

           <button 
           className="login"
           onClick={onClickLogin}
           >Continuar</button>
           
           <button 
           className="cadastro"
           onClick={
            
            ()=>goToPage(navigate,'CreateLogin')
            
            
        }
           >Cadastrar</button>
        </Pagina>
    )
}

export default PaginaLogin