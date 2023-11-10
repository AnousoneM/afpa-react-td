import './App.css';
import Home from './home/Home';

function App() {
  const clicBouton = () => alert('bouton cliqué')
  return (
    <header className="App">
      <Home />
      <button
        className="App-button"
        onClick={clicBouton}>
        Modifier l’animation</button>
    </header>
  );
}

export default App;
