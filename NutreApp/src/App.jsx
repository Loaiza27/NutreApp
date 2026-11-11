import { NavLink, Route, Routes } from "react-router-dom";
import Registro from "./pages/Registro.jsx";
import Home from "./pages/Home.jsx";
import logo from "./assets/logo-nutresa.png";

const App = () => (
  <>
    <header className="barra">
      <img src={logo} alt="Grupo Nutresa" className="logo" />
      <nav>
        <NavLink to="/" end>Registro</NavLink>
        <NavLink to="/home">Videos corporativos</NavLink>
      </nav>
    </header>

    <main className="contenedor">
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Registro />} />
      </Routes>
    </main>
  </>
);

export default App;