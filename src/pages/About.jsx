import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function About() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

 return (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    minHeight: '100vh', 
    backgroundColor: '#f0f8ff', 
    fontFamily: 'Arial, sans-serif',
    padding: '20px'
  }}>
    <div style={{ 
      backgroundColor: '#fff', 
      padding: '30px', 
      borderRadius: '15px', 
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', 
      maxWidth: '500px', 
      width: '100%',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        textTransform: 'capitalize', 
        fontSize: '3rem', 
        marginBottom: '20px' 
      }}>{pokemon.name}</h1>

      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name} 
        style={{ width: '150px', marginBottom: '20px' }} 
      />

      <p><strong>Height:</strong> {pokemon.height}</p>
      <p><strong>Weight:</strong> {pokemon.weight}</p>
      <p><strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
      <p><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
<div style={{ textAlign: 'center', marginTop: '20px' }}>
  <h2 style={{ fontSize: '1.5rem' }}>Stats:</h2>
  <ul style={{ 
  listStyleType: 'none', 
  padding: 0, 
  display: 'inline-block', 
  textAlign: 'center' 
}}>

    {pokemon.stats.map((stat, index) => (
      <li key={index} style={{ 
        marginBottom: '8px', 
        fontSize: '1rem' 
      }}>
        <strong>{stat.stat.name}:</strong> {stat.base_stat}
      </li>
    ))}
  </ul>
</div>

    </div>
  </div>
);

}

export default About;
