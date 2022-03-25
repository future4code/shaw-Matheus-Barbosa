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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Gil Brother'}
          fotoUsuario={'https://media.fstatic.com/M4zNkDfjtJ64-oSKITWxASZ4zgE=/195x289/smart/media/artists/avatar/2012/06/a17e20e6d04072fb2ce55db058e05c01.jpg'}
          fotoPost={'https://images.sympla.com.br/5dcc76f9bdfb7.jpg'}
        />

        <Post
          nomeUsuario={'Boça'}
          fotoUsuario={'http://4.bp.blogspot.com/-lDDEwO4MZ4Y/Ujjixt6C1-I/AAAAAAAAC9U/tHPRNAS5u2Y/s1600/hqdefault.jpg'}
          fotoPost={'https://g1.globo.com/Noticias/PopArte/foto/0,,11441569-EX,00.jpg'}
        />

        <Post
          nomeUsuario={'Joselito'}
          fotoUsuario={'https://i1.sndcdn.com/artworks-000123960697-yayeil-t500x500.jpg'}
          fotoPost={'https://minilua.com/wp-content/uploads/2011/12/joselitojpg.jpg'}
        />
      </MainContainer>
    );
 
  }
}




export default App
