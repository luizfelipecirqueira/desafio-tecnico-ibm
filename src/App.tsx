import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './assets/css/style.css';
import { api } from '../src/api/baseApi';
import { useEffect, useState } from 'react';
import { Livro } from './types/Livro';

function App() {

  const [livros, setLivros] = useState<Livro[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    loadLivros();
  }, []);

  const loadLivros = async () => {
    setLoading(true);
    let json = await api.getAllLivros();
    console.log(json);
    setLoading(false);
    setLivros(json);
  }

  return (
    <div className="App">
      <form className="formulario">
        <div className="input-text">
          <TextField id="standard-basic" label="Digite aqui seu livro" required />
        </div>

        <div className="button">
          <Button variant="contained" onClick={loadLivros}>
            Carregar
          </Button>
          {loading &&
            <div>Carregando...</div>
          }
        </div>

        {!loading && livros.length > 0 &&
          <div>
            {livros.map((item, index) => (
              <div key={index}>
                <p>{item.title}</p>
                <p>{item.selfLink}</p>
              </div>
            ))}
          </div>
        }

        {!loading && livros.length === 0 &&
          <div>
            <p>Não há livros para exibir</p>
          </div>
        }
      </form>
    </div>
  );
}

export default App;
