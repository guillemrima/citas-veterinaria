const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {


    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm("Deseas eliminar el registro del paciente " + nombre + " ?")

        if(respuesta) {
            eliminarPaciente(id)
            console.log(respuesta)
        }
    }

    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between gap-5 mt-10">
            <button
                type = "button"
                className="py-2 px-10 w-screen bg-indigo-600 hover:bg-indigo-700 text-white font-bold
                upperase rounded-lg"
                onClick = {() => setPaciente(paciente)}
            >
                Editar
            
            </button>
            <button
                type = "button"
                className="py-2 px-10 w-screen bg-red-600 hover:bg-red-700 text-white font-bold
                upperase rounded-lg"
                onClick = {handleEliminar}
            >
                Eliminar
            
            </button>
        </div>
    </div>
    )
}

export default Paciente
