import Paciente from "./Paciente"


const ListadoPacientes = ( {pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
            <>
                <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                <p className="text-lg mt-5 text-center mb-10">
                    Administra tus {''}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p>
                {pacientes.map( paciente => (
                <Paciente 
                    key = {paciente.id}
                    paciente = {paciente}
                    setPaciente = {setPaciente}
                    eliminarPaciente = {eliminarPaciente}
                />
            ))}
            </>
            ) : (
            <>
                <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                <p className="text-lg mt-5 text-center mb-10">
                    Comienza agregando pacientes y{''}
                    <span className="text-indigo-600 font-bold"> se mostraran en esta columna</span>
                </p>
            </>
            )}
        </div>
    )
}

export default ListadoPacientes
