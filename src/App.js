import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>
        <Counter initValue={5}/>

    </div>
  );
}

export default App;