// URL base de la API proporcionada por el challenge.
// Se reutiliza para evitar repetir la URL en cada request.
const BASE_URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";

// Función asíncrona que consulta las posiciones abiertas.
// Devuelve un array de trabajos disponibles.
export const getJobs = async () => {

  // Realiza una petición HTTP GET al endpoint de jobs
  const res = await fetch(`${BASE_URL}/api/jobs/get-list`);

  // Si la respuesta no es exitosa lanzamos un error para que el frontend pueda manejarlo.
  if (!res.ok) throw new Error("Error al obtener posiciones");
  return res.json();
};

// Función que envía la postulación del candidato.

export const applyToJob = async (body) => {

  // Realiza una petición HTTP POST al endpoint de postulación
  const res = await fetch(`${BASE_URL}/api/candidate/apply-to-job`, {
    method: "POST",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || data.message || "Error al aplicar");
  }
  return data;
};