import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Paso1 from "./pages/Paso1";
import Paso2 from "./pages/Paso2";
import Paso3 from "./pages/Paso3";
import Paso4 from "./pages/Paso4";
import Paso5 from "./pages/Paso5";
import Paso6 from "./pages/Paso6";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Paso2" element={<Paso2/>}/>
        <Route path="/Paso3" element={<Paso3/>}/>
        <Route path="/Paso4" element={<Paso4/>}/>
        <Route path="/Paso5" element={<Paso5/>}/>
        <Route path="/Paso6" element={<Paso6/>}/>
        <Route path="/" element={<Paso1/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
