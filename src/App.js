import './App.css';
import Register from './components/Register/register';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <div className='app-container mt-5 mb-5'>
        <div className='input-container'>
          <Register/>
        </div>
      </div>
    </div>
  );
}

export default App;
