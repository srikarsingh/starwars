import './App.css';
import { People } from './People/People';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='welcome-container'>
          <div className="logo"></div>
        </div>
        <div className="details-container">
          <People />
        </div>
      </div>
    </div>
  );
}

export default App;
