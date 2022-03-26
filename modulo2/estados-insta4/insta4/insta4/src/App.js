import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`




class App extends React.Component {

  state ={
  poste: [
    {
      nomeUsuario: "Gil Brother",
      fotoUsuario: "https://media.fstatic.com/M4zNkDfjtJ64-oSKITWxASZ4zgE=/195x289/smart/media/artists/avatar/2012/06/a17e20e6d04072fb2ce55db058e05c01.jpg",
      fotoPost: "https://images.sympla.com.br/5dcc76f9bdfb7.jpg"
    },
    {
      nomeUsuario: "Boça",
      fotoUsuario: "http://4.bp.blogspot.com/-lDDEwO4MZ4Y/Ujjixt6C1-I/AAAAAAAAC9U/tHPRNAS5u2Y/s1600/hqdefault.jpg",
      fotoPost: "http://1.bp.blogspot.com/-0A8lF06LeVE/UxCBy_ssEuI/AAAAAAAAAms/89A27pEVun0/s1600/_DSC1421.jpg"
    },
    {
      nomeUsuario: "Joselito",
      fotoUsuario: "https://i1.sndcdn.com/artworks-000123960697-yayeil-t500x500.jpg",
      fotoPost: "https://minilua.com/wp-content/uploads/2011/12/joselitojpg.jpg"
    }
  ],
      nome:"",
      fotoPost1: "",
      postagem: ""
}
adicionaPostagem = () => {
  
  const novaPostagem = {
    
    nome: this.state.nome,
    fotoUsuario: this.state.fotoPost1,
    fotoPost: this.state.postagem
  };

  
  const novoPostagem = [...this.state.poste, novaPostagem];


  this.setState({ poste: novoPostagem });
};

onChangeNome = (event) => {

  this.setState({ nome: event.target.value });
}
onChangeFoto = (event) => {

  this.setState({ fotoPost1: event.target.value });
}
onChangePost = (event) => {

  this.setState({ postagem: event.target.value });
}


  
  render() {

    const postagens = this.state.poste.map((post) => {
      return <Post nomeUsuario = {post.nomeUsuario} fotoUsuario= {post.fotoUsuario}  fotoPost = {post.fotoPost}/>
    })

    return (
      <MainContainer>
        {postagens} 
        <div>
          <input
           value={this.state.nome}
            placeholder={"Nome"}
            onChange={this.onChangeNome}
            
          />
          <input
            value={this.state.fotoPost1}
            placeholder={"Foto do Usuário"}
            onChange={this.onChangeFoto}
          />
           <input
            value={this.state.postagem}
            placeholder={"Foto da Postagem"}
            onChange={this.onChangePost}
          />
          <button onClick={this.adicionaPostagem}>Adicionar</button>
        </div>
      </MainContainer>
    
    );
 
  }
}




export default App
