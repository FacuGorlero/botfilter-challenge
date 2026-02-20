import JobList from "./Components/JobList.jsx";

// Datos del candidato obtenidos desde la API (Step 2 del challenge).
// Se pasan como props a los componentes que necesitan esta información.
const candidate = {
  uuid: "adca7db8-e45f-4a0d-a37b-f4e65bda9729",
  candidateId: "74042018005",
  applicationId: "77706356005",
  firstName: "Facundo",
};

function App() {
  return (
    // Contenedor principal con un pequeño padding para mejorar la presentación
    <div style={{ padding: 20 }}>
      
      <h1>BotFilter Challenge</h1>

      <h2>Bienvenido {candidate.firstName}</h2>

      <JobList candidate={candidate} />
    </div>
  );
}

export default App;