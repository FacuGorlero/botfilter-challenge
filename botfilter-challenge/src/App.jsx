import "./App.css";

const projects = [
  {
    title: "Landing para marca personal",
    description:
      "Sitio de presentación con animaciones suaves, enfoque mobile-first y llamadas a la acción claras.",
    stack: ["React", "Vite", "CSS"],
    link: "#",
  },
  {
    title: "Dashboard de métricas",
    description:
      "Panel con tarjetas KPI, gráficos interactivos y filtros para visualizar performance en tiempo real.",
    stack: ["React", "Recharts", "API REST"],
    link: "#",
  },
  {
    title: "E-commerce UI",
    description:
      "Interfaz moderna para catálogo, detalle de producto y checkout con foco en conversión.",
    stack: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
];

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <p className="eyebrow">PORTAFOLIO</p>
        <h1>Hola, soy Facundo 👋</h1>
        <p className="hero-text">
          Desarrollador Frontend apasionado por crear experiencias web modernas,
          limpias y rápidas.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Ver proyectos
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contactarme
          </a>
        </div>
      </header>

      <section className="section about" id="about">
        <h2>Sobre mí</h2>
        <p>
          Me especializo en construir interfaces elegantes y funcionales con React.
          Disfruto trabajar en productos digitales donde el diseño y la
          experiencia de usuario son prioridad.
        </p>
      </section>

      <section className="section" id="projects">
        <h2>Proyectos destacados</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tags">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={project.link} className="project-link">
                Ver detalle →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2>Contacto</h2>
        <p>
          ¿Te interesa trabajar juntos? Escribime a
          <a href="mailto:facundo.dev@email.com"> facundo.dev@email.com</a>
        </p>
      </section>
    </div>
  );
}

export default App;
