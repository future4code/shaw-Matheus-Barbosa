import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardGrande/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Matheus Lima Barbosa" 
          descricao="Oi, eu sou o Matheus . Sou estudante da Labenu. Estou aprendendo a fazer Códigos em javascript e estou gostando muito da nova experiência"
        />
        
        <ImagemButton 
          imagem="https://image.freepik.com/icones-gratis/seta-para-baixo_318-60458.jpg" 
          texto="Ver mais"
        />
      </div>
      <div>
      <CardPequeno 
          imagem="https://static.vecteezy.com/system/resources/previews/000/581/764/non_2x/email-icon-vector-illustration.jpg" 
          nome="Email:" 
          descricao="matheus-lb@hotmail.com"
        />
        

      </div>
      <div>
      <CardPequeno 
          imagem="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-vector-location-icon-png-image_317888.jpg" 
          nome="Endereço:" 
          descricao="Rua Saudade ,46 ,Pinheiral-RJ"
        />
        

      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bras%C3%A3o_Nacional_PCSP.png" 
          nome="Policia Civil" 
          descricao="Investigações sobre entorpecentes." 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2018/01/marinha-do-brasil-logo-1.png" 
          nome="Marinha do Brasil" 
          descricao="Monitoramento do sistema de satélite siscomis." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
