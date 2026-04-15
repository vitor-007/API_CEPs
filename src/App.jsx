import { useState } from 'react';
import './App.css';

function App() {
  const [cep, setCep] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const buscarCep = async () => {
    // reseta o estado pra nova busca
    setErro(null);
    setResultado(null);
    setCarregando(true);

    try {
      const response = await fetch(`http://localhost:3000/api/cep/${cep}`);
      const data = await response.json();

      if (data.erro) {
        setErro(data.erro);
      } else {
        setResultado(data);
      }
    } catch (err) {
      setErro('Erro de conexão. O servidor Node (server.js) está rodando?');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h2>Consulta de CEP</h2>
        
        <div className="input-group">
          <input
            type="text"
            placeholder="Digite o CEP (Apenas Números)"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            maxLength="8"
          />
          <button onClick={buscarCep} disabled={carregando || cep.length === 0}>
            {carregando ? 'Buscando...' : 'Buscar'}
          </button>
        </div>

        {erro && <p className="erro-msg">{erro}</p>}

        {resultado && (
          <div className="resultado">
            <p><strong>Logradouro:</strong> {resultado.logradouro}</p>
            <p><strong>Bairro:</strong> {resultado.bairro}</p>
            <p><strong>Cidade:</strong> {resultado.cidade}</p>
            <p><strong>Estado:</strong> {resultado.estado}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;