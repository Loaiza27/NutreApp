import { Link } from "react-router-dom";

const categorias = [
  { titulo: "Cultura y valores", texto: "Conoce quiénes somos y lo que nos mueve como Grupo." },
  { titulo: "Capacitación", texto: "Formación por área para crecer en tu rol." },
  { titulo: "Seguridad y bienestar", texto: "Buenas prácticas para cuidarte y cuidar a tu equipo." },
  { titulo: "Comunicados internos", texto: "Mensajes de la dirección y novedades de la compañía." },
];

const Home = () => (
  <>
    <section className="hero">
      <h1>Videos corporativos Nutresa</h1>
      <p>
        Plataforma interna para ver, por categoría y por área, los videos de
        capacitación, cultura y comunicación de la compañía.
      </p>
      <Link to="/" className="boton">Crear una cuenta</Link>
    </section>

    <section className="rejilla">
      {categorias.map((c) => (
        <article className="tarjeta" key={c.titulo}>
          <h2>{c.titulo}</h2>
          <p>{c.texto}</p>
        </article>
      ))}
    </section>
  </>
);

export default Home;