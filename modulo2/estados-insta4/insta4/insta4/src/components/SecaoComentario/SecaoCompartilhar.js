import React, {Component} from 'react'
import styled from 'styled-components'


const CommentContainer = styled.div`
    display: grid;
    justify-content: center;
    padding: 5px;
    
   
`
const RedesSociais = styled.div`
    display:flex;
    justify-content: space-between;
    margin:5px;
  img{
      width:20px;
  }
`
const DivInput = styled.div`
    display:flex;
    justify-content:center;
    padding:5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoCompartilhar extends Component {
	state = {
		comentario: ''
	}

	onChangeComentario = (event) => {
		this.setState({
			comentario : event.target.value
		})
		console.log('Post compartilhadno no ' +this.props.name+ ' com a mensagem: '+ this.state.comentario)
	}

	render() {
		return <CommentContainer>
            <RedesSociais>
            <img src='https://imagepng.org/wp-content/uploads/2017/09/facebook-icone-icon.png' onClick = {this.props.aoEnviar} name='facebook'/>
            <img src='https://imagepng.org/wp-content/uploads/2018/08/twitter-icone.png' 
            onClick = {this.props.aoEnviar} name='twitter'/>
            <img src='https://imagepng.org/wp-content/uploads/2017/08/instagram-icone-icon.png'
            onClick = {this.props.aoEnviar} name='instagram'/>
            </RedesSociais>
            <DivInput>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
            </DivInput>
		</CommentContainer>
	}
}
