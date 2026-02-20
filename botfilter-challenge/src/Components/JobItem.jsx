import { useState } from "react";
import { applyToJob } from "../services/Api.js";

// Componente que representa una posición laboral individual.
// Recibe:
// - job: datos del trabajo (id, title)
// - candidate: datos del candidato necesarios para aplicar
export default function JobItem({ job, candidate }) {

  const [repoUrl, setRepoUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  // Validación simple para asegurar que la URL sea de GitHub
  const isValidGithubUrl = (url) =>
    url.startsWith("https://github.com/");

  // Función que se ejecuta al presionar el botón "Submit"
  const handleSubmit = async () => {

    // Validación: campo vacío
    if (!repoUrl) {
      setMessage("Ingresá la URL del repo");
      return;
    }

    // Validación: URL debe ser de GitHub
    if (!isValidGithubUrl(repoUrl)) {
      setMessage("Ingresá una URL válida de GitHub");
      return;
    }

    // Activamos estado de carga y limpiamos mensajes previos
    setLoading(true);
    setMessage("");

    try {
      // Llamada a la API para enviar la postulación
      await applyToJob({
        uuid: candidate.uuid,
        jobId: String(job.id),                
        candidateId: String(candidate.candidateId),
        applicationId: String(candidate.applicationId),
        repoUrl: repoUrl.trim(),              
      });

      setMessage("✅ Postulación enviada");

    } catch (error) {
      setMessage("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <h3>{job.title}</h3>
      <input
        type="text"
        placeholder="URL del repositorio"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        style={{ width: "100%", marginBottom: 8 }}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Enviando..." : "Submit"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}