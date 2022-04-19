import axios from "axios";
import React from "react";
import styled from "styled-components"
import TocarPlaylist from "./TocarPLayList";

const AdicionandoMusicas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default class AdicionarPlaylist extends React.Component{
        state = {
            
            nome: "",
            artista: "",
            link: "",
            idDaPlay : "",
            

        }

    
   

        onChangeId = (value) =>{

            
            this.setState({idDaPlay:value})
           
        }

        adicionarMusica= (id) =>{
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
            const auth = {
                headers: {
                    Authorization : "matheus-lima-shaw"
                }
            }
            const body = {
                "name": this.state.nome,
                "artist": this.state.artista,
                "url": this.state.link
            }

            axios.post(url,body,auth).then((res)=>{
                this.setState({
                    nome: "",
                    artista: "",
                    link: "",
                    idDaPlay : ""
        
                })
            }).catch((err)=>(
                console.log("deu errado")
            ))


        }
        onChangenome = (event) =>{
            this.setState({nome:event.target.value})
        }

        onChangeArtidta = (event) =>{
            this.setState({artista:event.target.value})
        }
        onChangeLink = (event) =>{
            this.setState({link:event.target.value})
        }


        

    render(){

    
       const opcoesDePlaylists= this.props.playlist.map((elemento)=>{
           return(
                <option
                    key={elemento.id}
                    value={elemento.id}
                    >
                    {elemento.name}
                    
                 </option>
                   
                    )
       })

       const oselect = (
           <AdicionandoMusicas>
           <select
           id="select"
           onChange={()=>this.onChangeId(document.getElementById('select').value)}
           >
           <option></option>
            {opcoesDePlaylists}

           </select>

           <input 
           placeholder="nome"
           value={this.state.nome}
           onChange={this.onChangenome}
           
           />
             <input 
           placeholder="artista"
           value={this.state.artista}
           onChange={this.onChangeArtidta}
           />
             <input 
           placeholder="link do arquivo"
           value={this.state.link}
           onChange={this.onChangeLink}
           />
           <button
           onClick={()=> this.adicionarMusica(this.state.idDaPlay)}
           >
               Adicionar
           </button>

            </AdicionandoMusicas>
       )

       console.log(this.state.idDaPlay)

      return(
        <div>

           {oselect}
           
           
            
        </div>
      )
    }
  }