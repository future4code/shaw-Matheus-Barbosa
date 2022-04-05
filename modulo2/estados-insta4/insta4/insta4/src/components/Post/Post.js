import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { IconeDeCompartilhamento } from '../IconeComContador/IconeDeCompartilhamento'
import {Compartilhar} from '../IconeComContador/Compartilhar'
import {SecaoCompartilhar} from '../SecaoComentario/SecaoCompartilhar'



const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    comentario: '',
    salvo: false,
    compartilhar:false
  }

  onClickCompartilhar = () =>{
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  onClickCurtida = () => {
    if (this.state.curtido === false){
    this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas + 1,
    })}else{
      this.setState({
        curtido:false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }
  onClickSalvar = () => {
    if (this.state.salvo === false){
    this.setState({
      salvo: true,
    })}else{
      this.setState({
        salvo:false,
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
      
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  aoEnviarCompartilhamento = () => {
    this.setState({
      salvo: false,
    })
  }

  render() {

    let iconeSalvar

      if (this.state.salvo){
        iconeSalvar = "https://img2.gratispng.com/20180330/zbw/kisspng-computer-icons-star-clip-art-black-star-5abe82f755a1e1.7664619115224348073508.jpg"
      }else{
        iconeSalvar = "https://images.vexels.com/media/users/3/156385/isolated/preview/4f64b01c22f5a8386e1a8c4c9a6ca43e---cone-bonito-estrela-by-vexels.png"
      }

    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

     if(this.state.compartilhar) {
      componenteComentario = <SecaoCompartilhar aoEnviar={this.aoEnviarCompartilhamento}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeDeCompartilhamento
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvar}
        
        />

        <Compartilhar
          icone= 'https://image.freepik.com/iconos-gratis/cuota-de-simbolo_318-42218.jpg'
          onClickIcone={this.onClickCompartilhar}
          
        />

      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post