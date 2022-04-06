import React from "react";
import styled from 'styled-components'
import axios from "axios";


const Lista = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        border-style: solid;
        width: 30%;
        align-self: center;
        margin: 0.5em;
        border-width: 1px;
    }
    button{
        align-self: center;
        margin: 0.5em;
        background-color: red;
        color: white;
    }
    
    

`

export default class Usuarios extends React.Component{

    state ={
        usuario:[],
        infoUsuarios:"",

        opcoesJanela:false,
        

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
            
            this.setState({usuario:resposta.data})
        }).catch((erro) => {
            alert("erro")
        })
    }

    deletar = (id) =>{

        


        if (!alert("Deseja deletar o usuário?")){
        const user = id
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user}`

        axios.delete (url,{
            headers : {
                Authorization : "matheus-lima-shaw"
            }
        }).then((res)=>{
            alert("usuario deletado")
            this.buscarUsuarios()
           
        }).catch((err)=>{
            console.log(err.response.data)
            alert("Erro ao deletar")
        })
    }else{
        alert("O usuário não foi deletado")
    }
      
    }

    opcoesDeUsuario = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios.get(url,{
            headers:{
                Authorization:"matheus-lima-shaw"
            }
        }).then((res)=>{

           this.setState({infoUsuarios:res.data,opcoesJanela: !this.state.opcoesJanela})
        
            

        }).catch((err)=>{
            console.log(err.response.data)
        })

    }

 

    render(){
     

        let opcoes

        const nome = this.state.infoUsuarios
        console.log(this.state.infoUsuarios)



        if (this.state.opcoesJanela){
         opcoes = (
             <div>
                 <p>{nome.email}</p>
             </div>
         )
        }
      

        let retornaLista = this.state.usuario.map((elemento) => {
    
            return(
               
                <div key={elemento.id} onClick={() => this.opcoesDeUsuario(elemento.id)} >
                <p>{elemento.name}</p>
                <button onClick={() => this.deletar(elemento.id)}>X</button> 
                
               
                </div>
                     
            ) 
        })
       

        return(

            
            <Lista>
               {retornaLista} 
               {opcoes}
               
            </Lista>
        )

    }
}