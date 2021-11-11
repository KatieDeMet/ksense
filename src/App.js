import './App.css';
import router from './router';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ksense Mock Project</h1>
      </header>
      {router}
    </div>
  );
}

export default App;
