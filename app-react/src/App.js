


import { BrowserRouter, Routes, Route,Link, NavLink } from "react-router-dom";
import './App.css';
import {NoPage,List,Login,Create} from "./pages"
function App() {
  return (
    <div style={{padding: "10px"}} className="App">
          <BrowserRouter>
            <Link className="btn btn-link" to={`/`}>List</Link>
            <Link className="btn btn-link" to={`/login`}>login</Link>
            <Link className="btn btn-link" to={`/create`}>create</Link>
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create" element={<Create />} />
              {/* <Route path="/login/:id" element={<Login />} /> */}
              <Route path="*" element={<NoPage />} />
           </Routes>
        </BrowserRouter>
  </div>
  );
}

export default App;

