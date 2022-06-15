import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './assets/css/style.css';

function App() {

 
  return (
    <div className="App">
      <form className="formulario">
        <div className="input-text">
          <TextField id="standard-basic" label="Digite aqui seu livro" />
        </div>
        <div className="button">
          <Button variant="contained" type="submit">
            Carregar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
