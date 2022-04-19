import React, { useEffect, useState } from "react";
import axios from 'axios'

function PokeCard(props) {
   

    const [pokemon,setPokemon] = useState({})
  

    useEffect(()=>{
        setPokemon(props.pokemon)
    },[])
  
   useEffect(()=>{
    if (pokemon !== props.pokemon) {
        pegaPokemon(props.pokemon)
      }
   },[pokemon])
   
    const pegaPokemon = pokeName => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => {
          setPokemon(response.data)
        })
        .catch(err => {
          console.log(err);
        });
    };

        const pokemonn = pokemon
  
      return (
        <div>
          <p>{pokemonn.name}</p>
          <p>{pokemonn.weight} Kg</p>
          {pokemonn.types && <p>{pokemonn.types[0].type.name}</p>}
          {pokemonn.sprites && (
            <img src={pokemonn.sprites.front_default} alt={pokemonn.name} />
          )}
        </div>
      );
    
  }
  
  export default PokeCard;
  
