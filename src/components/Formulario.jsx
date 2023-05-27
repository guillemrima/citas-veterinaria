import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        
        if(Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const fecha = Date.now().toString(36)
        const random = Math.random().toString(36).substring(2)

        return fecha + random
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if([ nombre, propietario, email, fecha, sintomas ].includes('')) {
            setError(true)
            return;
        }
        setError(false)

        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        if(paciente.id) {
            //Editando el registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ?
                objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})
        }else {
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }



        //REINICIAR EL FORMULARIO
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 m-3">
                {error &&  <Error><p>Debes rellenar todos los campos</p>
                </Error>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre de la Mascota
                    </label>
                    <input
                        id = "mascota"
                        type = "text"
                        placeholder = "Nombre de la mascota"
                        className = "border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        value = {nombre}
                        onChange = {(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre del propietario
                    </label>
                    <input
                        id = "propietario"
                        type = "text"
                        placeholder = "Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        value = {propietario}
                        onChange = {(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email de contacto
                    </label>
                    <input
                        id = "email"
                        type = "email"
                        placeholder = "email"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Fecha de alta
                    </label>
                    <input
                        id = "alta"
                        type = "date"
                        placeholder = "Fecha de alta"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        value = {fecha}
                        onChange = {(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id = "sintomas"
                        placeholder = "Describe los síntomas de su mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        value = {sintomas}
                        onChange = {(e) => setSintomas(e.target.value)}
                    />
                </div>
                <input
                    type = "submit"
                    className = "bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-800 cursor-pointer transition-all duration-400"
                    value = {paciente.id ? "Editar paciente" : "Agregar paciente"}
                />
            </form>
        </div>
    )
}

export default Formulario

