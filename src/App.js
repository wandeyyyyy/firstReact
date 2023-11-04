import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navigation/NavBar';

function App() {
  return (
    <div className='text-center'>
    <button className='btn btn-success mr-5'>Click Me!</button>
    <button className='btn btn-danger'>Dont Click Me!</button>
    <NavBar/>
    </div>
  );
}

export default App;