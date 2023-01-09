import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import SubmitQuery from './SubmitQuery';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        {/* <Navbar /> */}
        <div className="pages">
          <Routes>
          <Route 
              exact path="/" 
              element={<Login />} 
            />
            <Route 
              exact path="/submitQuery" 
              element={<SubmitQuery />} 
            />
            <Route 
              exact path="/portal" 
              element={<Home />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
