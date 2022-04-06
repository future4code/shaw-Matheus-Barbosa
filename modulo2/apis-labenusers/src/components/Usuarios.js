import React from "react";
import styled from 'styled-components'
import axios from "axios";


const Lista = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    

`

export default class Usuarios extends React.Component{

    state ={
        usuario:[]
    }

    componentDidMount = () =>{
        this.buscarUsuarios()
    }

    buscarUsuarios = ()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        ,{
            headers :{
                Authorization : "matheus-lima-shaw"
            }
        }
        ).then((resposta) => {
            
            let novo = resposta.data
            let array = [...this.state.usuario,novo]
            
            this.setState({usuario:array})
        }).catch((erro) => {
            alert("erro")
        })
    }

    render(){
        console.log(this.state.usuario)
        
        const listaUsers = this.state.usuario.map((elemento,index) => {
            return <p>{elemento[index].nome}</p>
        })

        return(
            <div>

                <Lista>
                 {listaUsers}
                </Lista>
            </div>
        )

    }
}