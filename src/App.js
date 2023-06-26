
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddInventory from './components/AddInventory';
import EditInventory from './components/EditInventory';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/addinventory' element={<AddInventory />}/>
        <Route exact path='/editinventory/:id' element={<EditInventory/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
