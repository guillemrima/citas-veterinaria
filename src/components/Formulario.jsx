import { useState, useEffect } from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if([ nombre, propietario, email, fecha, sintomas ].includes('')) {
            setError(true)
            return;
        }
        setError(false)
    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Aañade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 m-3">
                {error && <div className='bg-red-700 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
                                <p>Debes rellenar todos los campos</p>
                            </div>
                }
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
                        Email de contacto
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
                    value = "Agregar Paciente"
                />
            </form>
        </div>
    )
}

export default Formulario

