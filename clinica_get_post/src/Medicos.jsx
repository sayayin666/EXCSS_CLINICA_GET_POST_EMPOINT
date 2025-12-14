import { useEffect, useState } from "react"

function Medicos() {
    const [nombre, setNombre] = useState("")
    const [especialidad, setEspecialidad] = useState("")
    const [dtos, setDatos] = useState([])

    async function encaletar(e) {
        e.preventDefault()
        await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/medicos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
            body:JSON.stringify({el_nombre: nombre, la_especialidad: especialidad})
        })
    }
    useEffect(() => {
        averiguar()
    }, [])
    async function averiguar() {
        const ddl = await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/medicos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            }
        })
        const ssd = await ddl.json()
        setDatos(ssd)
    }
    return(
        <div>
            <h1>REGISTRAR MEDICO</h1>
            <form onSubmit={encaletar}>
                <input type="text" placeholder="nombre_medico" required onChange={(e) => setNombre(e.target.value)}></input>
                <input type="text" placeholder="nombre_especialidad" required onChange={(e) => setEspecialidad(e.target.value)}></input>
                <button type="submit">ENVIAR</button>
            </form>
            <h2>MEDICOS REGISTRADOS</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Especialidad</th>
                    </tr>
                </thead>
                <tbody>
                    {dtos.map((h) => (
                        <tr>
                            <td>{h.id}</td>
                            <td>{h.nombre}</td>
                            <td>{h.especialidad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Medicos;