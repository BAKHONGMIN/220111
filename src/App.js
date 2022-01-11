import logo from './logo.svg';
import './App.css';
import Fourth from './Fourth';
import './Fourth.css';
// 여기 추가

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <dic className='container'>
        <img src={logo} className="App-logo" alt="logo" />
        </dic>
        
      </header>
      <Fourth></Fourth>
    </div>
  );
}

export default App;
