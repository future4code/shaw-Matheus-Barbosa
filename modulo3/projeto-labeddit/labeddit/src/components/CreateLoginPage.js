import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { goToHome } from "../Routes/Coordinator";
import { base } from "../constants/BASE_URL";
import axios from "axios";

const Cabecalho = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: aliceblue;
    width: 100%;
    height: 5em;
        h3{
            margin: 1em;
            color: red;
        }
        button{
            margin: 1em ;
        }
`

const Cadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
function CreateLoginPage (){

    const [name,setName] = useState("")
    const [senha,setSenha] = useState("")
    const [email,setEmail] = useState("")
    const [termos,setTermos] = useState(false)

    const navigate = useNavigate()

    const aceitarTermos = () =>{
        setTermos(!termos)
    }

    const onClickCadastrar = () =>{

        
        const body = {
            "username":name,
            "email": email,
            "password": senha
        }

        if(termos){
        axios.post(`${base}/users/signup`,body).then((res)=>{
            
            localStorage.setItem("token",res.data.token)
            alert("Novo usuário Cadastrado")
            goToHome(navigate)


        }).catch((err)=>{
            console.log(err)
        })
        }else{
            localStorage.setItem(null)
            alert("Você deve aceitar os termos")
        }
    }


    return(
        <>
         <Cabecalho>
             <h3>Labeddit</h3>
             <button
             onClick={()=>goToHome(navigate)}
             >Entrar</button>
         </Cabecalho>
         <Cadastro>
            <h3>Seja bem vindo ao Labeddit</h3>
            <input
            placeholder="Nome de Usuário"
            type="text"
            value={name}
            onChange={(event)=>setName(event.target.value)}
            />
            <input
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(event)=>setSenha(event.target.value)}
            />
            <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            />
            
            <p>Ao continuar você concorda com o nosso Contrato de usuário e nosso Termo de Privacidade</p>
            <div>
            <input type="checkbox" name="check" onChange={aceitarTermos}/>
            <label for="check">Desejo receber e-mails </label>
            </div>

            <button
            onClick={onClickCadastrar}
            >Cadastrar</button>

         </Cadastro>
        </>
        
    
    )
}

export default CreateLoginPage