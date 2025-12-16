import { useEffect, useState } from "react"

function Pacientes() {
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [dats, setDatos] = useState([])

    async function enfundar(e) {
        e.preventDefault()
        await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/pacientes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
            body:JSON.stringify({nombre: nombre, telefono: telefono})
        })
    }
    useEffect(() => {
        ordenar()
    }, [])

    async function ordenar() {
        const rrd = await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/pacientes', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            }
        })
        const micro = await rrd.json()
        setDatos(micro)
    }
    return(
        <div>
            <h1>REGISTRAR PACIENTES</h1>
            <form onSubmit={enfundar}>
                <input type="text" placeholder="nombre_paciente" required onChange={(e) => setNombre(e.target.value)}></input>
                <input type="text" placeholder="telefono" required onChange={(e) => setTelefono(e.target.value)}></input>
                <button type="submit">ENVIAR</button>
            </form>
            <h2>PACIENTES REGISTRADOS</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {dats.map((c) => (
                        <tr>
                            <td>{c.id}</td>
                            <td>{c.nombre}</td>
                            <td>{c.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Pacientes;