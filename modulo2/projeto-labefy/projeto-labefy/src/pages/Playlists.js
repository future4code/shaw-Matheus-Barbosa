
import React from "react";
import styled from 'styled-components'
import axios from 'axios'

const AddPlaylist = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5em;
`

const Lista = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    p{
        
        border-style: solid;
        width: 50%;
        text-align: center;
        margin: 0.5em;
    }

`

export default class Playlists extends React.Component{

    state={
        nomeDaPlaylist:""
    }

    componentDidMount = () =>{
        this.recuperaPlayList()
    }

    addItemPlayList = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nomeDaPlaylist

        }
        const auth = {
            headers: {
                Authorization : "matheus-lima-shaw"
            }
        }

        axios.post(url,body,auth).then((res)=>{
            this.setState({nomeDaPlaylist:""})
            this.recuperaPlayList()
            
        }).catch((err)=>{
            console.log(err.response)
        })

    }

    addNovaPlaylist = (event) => {
        this.setState({nomeDaPlaylist:event.target.value})
    }

    recuperaPlayList = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const auth = {
            headers: {
                Authorization : "matheus-lima-shaw"
            }
        }

        axios.get(url,auth).then((res)=>{
            const novaLista =  res.data.result.list
            this.props.getPlaylist(novaLista)
            
        }).catch((err) =>{
            console.log(err.response)
        })
    }
  
    render(){

        const listaDePlayLists = this.props.playlist.map((elemento)=>{
            let id = elemento.id
            return <p 
            key={elemento.id} 
            
            onClick={()=>{
                this.props.trocarPagina("tocar")
                this.props.trocarId(elemento.id)
            }} 

            >{elemento.name}</p>
        })


      return(
        <div>
            <AddPlaylist>
                
                <input
                placeholder="Nova Playlist"
                value={this.state.nomeDaPlaylist}
                onChange={this.addNovaPlaylist}
                />
                <button
                onClick={this.addItemPlayList}
                >
                    Add
                </button>

            </AddPlaylist>

            <Lista>
               {listaDePlayLists}

            </Lista>
            
                
            
        </div>
      )
    }
  }