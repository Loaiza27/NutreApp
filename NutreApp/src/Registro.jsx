import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { roles, departamentos } from "../data/catalogos.js";

const inicial = { nombre: "", correo: "", rol: "", contrasenia: "", departamento: "" };

const Registro = () => {
  const [form, setForm] = useState(inicial);
  const navigate = useNavigate();

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    // El id (UUID) y el hash de la contraseña los genera el backend.
    console.log("Registro:", form);
    navigate("/home");
  };

  return (
    <form className="tarjeta formulario" onSubmit={enviar}>
      <h1>Crear cuenta</h1>

      <label>Nombre
        <input name="nombre" value={form.nombre} onChange={cambiar} required />
      </label>

      <label>Correo
        <input type="email" name="correo" value={form.correo} onChange={cambiar} required />
      </label>

      <label>Rol
        <select name="rol" value={form.rol} onChange={cambiar} required>
          <option value="">Selecciona un rol</option>
          {roles.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </label>

      <label>Departamento
        <select name="departamento" value={form.departamento} onChange={cambiar} required>
          <option value="">Selecciona un departamento</option>
          {departamentos.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </label>

      <label>Contraseña
        <input type="password" name="contrasenia" value={form.contrasenia}
               onChange={cambiar} minLength={8} required />
      </label>

      <button type="submit">Registrarme</button>
    </form>
  );
};

export default Registro;