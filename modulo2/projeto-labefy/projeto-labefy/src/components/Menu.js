import React from 'react'
import styled from 'styled-components'

const Cabecalho = styled.div`

display: flex;
align-items: center;
flex-direction: column;


`


export default class Menu extends React.Component{

    render(){

        return(
            <div>
                <Cabecalho>
                    <h1>Labe<strong>fy</strong></h1>
                    <div>                   
                     <button
                    onClick={() => this.props.trocarPagina("playlists")}
                    > Minhas Playlists </button>
                      <button
                    onClick={() => this.props.trocarPagina("add")}
                    > Add Musicas </button>
                    </div>

                </Cabecalho>
            </div>
            
        )
    }
}