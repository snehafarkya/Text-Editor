import logo from './logo.svg';
import './App.css';
import TextEditor from './component/Texteditor';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      <TextEditor/>
    </div>
  );
}

export default App;
