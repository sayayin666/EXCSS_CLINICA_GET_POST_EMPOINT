import { useState, useEffect } from "react"

function Clinica() {
    const [nombre, setNombre] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [datos, setDatos] = useState([])

    async function guardar(e) {
        e.preventDefault()
        await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/clinicas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
            body: JSON.stringify({nombre: nombre, ciudad: ciudad})
        })
    }
    useEffect(() => {
        traer()
    }, [])
    async function traer() {
        const rrst = await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/clinicas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
        })
        const rep = await rrst.json()
        setDatos(rep)
    }
    return(
        <div>
            <h1>REGISTRAR CLINICA</h1>
            <form onSubmit={guardar}>
                <input type="text" placeholder="nombre_clinica" required onChange={(e) => setNombre(e.target.value)}></input>
                <input type="text" placeholder="nombre_ciudad" required onChange={(e) => setCiudad(e.target.value)}></input>
                <button type="submit">ENVIAR</button>
            </form>
            <h2>CLINICAS REGISTRADAS</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre_clinica</th>
                        <th>Nombre_ciudad</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((t) => (
                        <tr>
                            <td>{t.id}</td>
                            <td>{t.nombre}</td>
                            <td>{t.ciudad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Clinica;