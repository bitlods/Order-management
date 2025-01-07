import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import AllOrder from './pages/AllOrder';
import Home from './pages/Home';
import Bar from './pages/Bar';
import UpdateOrder from './pages/UpdateOrder';
import DeleteOrder from './pages/DeleteOrder';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Bar/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allorder" element={<AllOrder />} />
        <Route path="/UpdateOrder" element={<UpdateOrder />} />
        <Route path="/DeleteOrder" element={<DeleteOrder />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
