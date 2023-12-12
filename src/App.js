import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Shared/NavBar.js';
import AppRouter from './AppRouter.js';

function App() 
{
  return (
    <div className="App">
        <NavBar/>
        <AppRouter/>
    </div>
  );
}

export default App;
