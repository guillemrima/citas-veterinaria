

const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">Guillem</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">email@gmai.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
            <span className="font-normal normal-case">10 Diciembre 2023</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">Ni bebe ni deja comer</span>
        </p>
    </div>
    )
}

export default Paciente
