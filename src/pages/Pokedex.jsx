import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const colors = [
  "#ffe0e0", "#e0f7fa", "#e0ffe0", "#f0e0ff", "#fff0e0", "#e0e0ff",
  "#f9e79f", "#aed6f1", "#fadbd8", "#d5f5e3", "#f5cba7", "#d7bde2"
];


function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

 useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`)
    .then(res => res.json())
    .then(data => {
      Promise.all(data.results.map(pokemon => 
        fetch(pokemon.url).then(res => res.json())
      ))
      .then(fullPokemonData => setPokemonList(fullPokemonData));
    });
}, [offset]);


  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '30px' }}>Pokédex</h1>

      <div style={{ 
        display: 'grid', 
      gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '20px', 
        marginBottom: '30px' 
      }}>
        {pokemonList.map((pokemon, index) => (
       <div 
  key={index} 
  style={{ 
    backgroundColor: colors[index % colors.length],
    padding: '25px', 
    borderRadius: '15px', 
    textAlign: 'center',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    transform: 'scale(1)',
    cursor: 'pointer'
  }}
  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
  onClick={() => navigate(`/about/${pokemon.name}`)}
>
  {/* ADD IMAGE */}
  <img 
    src={pokemon.sprites.front_default} 
    alt={pokemon.name}
    style={{ width: '80px', height: '80px', marginBottom: '10px' }}
  />
  {/* NAME */}
  <h2 style={{ 
    textTransform: 'capitalize', 
    fontSize: '1.5rem',
    color: '#333'
  }}>
    {pokemon.name}
  </h2>
</div>


        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => setOffset(offset - 12)} 
          disabled={offset === 0}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#d3d3d3',
            cursor: offset === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          Previous
        </button>
        
        <button 
          onClick={() => setOffset(offset + 12)}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pokedex;
