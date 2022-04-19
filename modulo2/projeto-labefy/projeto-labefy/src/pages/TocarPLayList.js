import React from "react"
import axios from "axios"
import styled from "styled-components"


const Listagem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default class TocarPlaylist extends React.Component{
 

    state ={
        musicas:[],
        urlMusica:""
    }


    componentDidMount = () =>{
        this.getMusicasPlaylist(this.props.idAtual)
    }

   getMusicasPlaylist = (id) => {

        

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,{
        headers:{
            Authorization: "matheus-lima-shaw"
        }
    }
    ).then((resultado)=>{
        
         this.setState({musicas:resultado.data.result.tracks})
        
    }).catch((err)=>{
        console.log("não foi")
    })
    

   }

   

   tocaMusica = (link) =>{
     console.log(link)
     this.setState({urlMusica:link})
   }

    render(){
        const array = this.state.musicas
        let listaDeMusicas = array.map((elemento)=>{
            return (
            <li key={elemento.id}
            onClick={()=>this.tocaMusica(elemento.url)}
            >{elemento.artist} - {elemento.name}</li>
            
            )
        })

     
    
    

    
    
     console.log(array)
        
       


        return (
            <Listagem>
            
            <audio controls src={this.state.urlMusica}/>
            
           <hr/>
            <ul>
             {listaDeMusicas}
             </ul>
            </Listagem>
                
        )
    }
}

