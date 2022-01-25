import './App.css';
import NewLink from './NewLink';
import ShowLinks from './ShowLinks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewLink/>
        <hr className="App-hr"/>
        <ShowLinks/>
      </header>
    </div>
  );
}

export default App;
