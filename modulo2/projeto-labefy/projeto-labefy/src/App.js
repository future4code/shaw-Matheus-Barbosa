import React from "react";
import Playlists from "./pages/Playlists";
import AdicionarPlaylist from "./pages/AdicionarPlaylist";
import Menu from "./components/Menu";
import TocarPlaylist from "./pages/TocarPLayList";


export default class App extends React.Component{
  state ={
    paginaExibida : "playlists",
    playlist :[],
    idAtual : ""
  }

 trocarId = (id) =>{
   this.setState({idAtual:id})
   
 }

  trocarPagina = (pagina) => {
    this.setState({paginaExibida: pagina})
  }

  getPlaylist = (nova) =>{
    
    this.setState({playlist:nova})
  }
  
  render(){

    console.log(this.state.playlist)
    const paginaAtual = () => 
    {
    switch(this.state.paginaExibida){
      case "playlists":
        return <Playlists getPlaylist={this.getPlaylist} playlist={this.state.playlist} trocarPagina={this.trocarPagina}  getId={this.idAtual} trocarId={this.trocarId}/>
      case "add":
        return <AdicionarPlaylist playlist={this.state.playlist} idAtual={this.state.idAtual}/>
      case "tocar":
        return <TocarPlaylist idAtual={this.state.idAtual} />
      default:
        return <Playlists />
      
    }
  }
    return(
      <div>
       
          <Menu trocarPagina={this.trocarPagina}/>          
          {paginaAtual()}

      
      </div>
    )
  }
}
