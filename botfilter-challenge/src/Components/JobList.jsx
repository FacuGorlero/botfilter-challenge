import { useEffect, useState } from "react";
import { getJobs } from "../services/Api.js";
import JobItem from "./JobItem.jsx";

// Componente encargado de:
// - Obtener las posiciones desde la API
// - Manejar estados de carga y error
// - Renderizar la lista de trabajos disponibles
export default function JobList({ candidate }) {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect se ejecuta una vez al montar el componente
  useEffect(() => {

    // Función asíncrona para obtener los trabajos
    const fetchJobs = async () => {
      try {
        const data = await getJobs(); 
        setJobs(data);               
      } catch (error) {
        console.error(error);
        setError("No se pudieron cargar las posiciones");
      } finally {
        setLoading(false); // finaliza estado de carga
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p>Cargando posiciones...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Posiciones disponibles</h2>

      {jobs.map((job) => (
        <JobItem
          key={job.id}      
          job={job}           
          candidate={candidate} 
        />
      ))}
    </div>
  );
}