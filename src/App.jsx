import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ marginBottom: '30px', textAlign: 'center' }}>
        <Link to="/" style={{ 
          margin: '0 10px', 
          textDecoration: 'none', 
          fontWeight: 'bold', 
          color: '#4CAF50',
          fontSize: '1.2rem'
        }}>
          Pokédex
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
