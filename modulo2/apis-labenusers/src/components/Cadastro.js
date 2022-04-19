import React from "react";
import styled from "styled-components";
import axios from 'axios'

const Informacoes = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

`
export default class Cadastro extends React.Component{
    state ={
        nome: "",
        email: ""
    }

    OnchangeNome = (event) => {
        this.setState({nome:event.target.value})
    }

    OnchangeEmail = (event) => {
        this.setState({email : event.target.value})
    }

    onClickCadastrar = () =>{

        const body = {
            name: this.state.nome,
            email:this.state.email
        }
       

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,{
            headers :{
                Authorization : "matheus-lima-shaw"
            }
        }).then((resposta) =>{
            alert("Cadastro enviado")
            
        }).catch((error) => {
            alert("Erro")
        })
        this.setState({nome:"",email:""})
    }

    render(){
   
        return(
            <div>
         <Informacoes>
             <input
             placeholder="Nome"
             value={this.state.nome}
             onChange={this.OnchangeNome}
             />
               <input
             placeholder="Email"
             value={this.state.email}
             onChange={this.OnchangeEmail}
             />
             <button
             onClick={this.onClickCadastrar}
             >Enviar</button>

         </Informacoes>
         </div>
        )
    }
}