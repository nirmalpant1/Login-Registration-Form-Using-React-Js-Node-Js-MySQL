import { BrowserRouter, Route} from "react-router-dom";
import { Routes} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

 
function App() {
  return (
/*    
      <Routes>
        <Route path="/login" element={Login} />
        <Route path="/register" element={Register} />
        <Route path="/dashboard" element={Dashboard} />
        <Route path="/dashboard" element={Navbar} />
      </Routes>
  */
 
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
