import { Fragment } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants/index.js'
import useCotizador from '../hooks/useCotizador.jsx'
import Error from './Error.jsx'


const Formulario = () => {

    const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')

        cotizarSeguro()
    }

  return (
    <>
        {error && <Error />}
        <form 
            onSubmit={handleSubmit}
        >
            <div className="my-1">
                <label 
                    className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                </label>
                <select 
                    name="marca" 
                    className="w-full p-3 bg-white border border-gray-400 rounded-sm"
                    onChange={e => handleChangeDatos(e)}
                    value={datos.marca}>

                    <option value="">-- Seleccioná tu marca --</option>
                    {MARCAS.map(marca => (
                        <option key={marca.id} value={marca.id}>
                            {marca.nombre}
                        </option>
                    ))}

                </select>
            </div>

            <div className="my-5">
                <label 
                    className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                </label>
                <select 
                    name="year" 
                    className="w-full p-3 bg-white border border-gray-400 rounded-sm"
                    onChange={e => handleChangeDatos(e)}
                    value={datos.year}>

                    <option value="">-- Seleccioná el modelo --</option>
                    {YEARS.map(year => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}

                </select>
            </div>

            <div className="my-5">
                <label 
                    className="block mb-3 font-bold text-gray-400 uppercase">
                        Elegí tu plan
                </label>
                <div className='flex gap-3 items-center'>
                        {PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <label htmlFor="">{plan.nombre}</label>
                                <input 
                                    type="radio" 
                                    name="plan" 
                                    value={plan.id} 
                                    onChange={e => handleChangeDatos(e)}
                                />
                            </Fragment>
                        ))}
                </div>
            </div>

            <input 
            type="submit" 
            className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white 
                       cursor-pointer p-3 uppercase font-bold rounded-md shadow-md mt-6'
            value="Cotizar"
            />
        </form>
    </>
  )
}

export default Formulario