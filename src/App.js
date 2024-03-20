import './App.css';
import {useState} from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  const [value, setValue] = useState(0)
  return (
    <div className='App'>
    <Navbar logoText="Kashif" />
    <div className="value"><h1>{value}</h1></div>
    <button onClick={()=>{setValue(value + 1)}}>Click me</button>
    <Footer />
    </div>
  );
}

export default App;
