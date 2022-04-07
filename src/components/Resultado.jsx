import { useCallback, useMemo, useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from '../constants'

const Resultado = () => {
    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos
    const yearRef = useRef(year)

    const [nombreMarca] = useCallback( MARCAS.filter(m => m.id === Number(marca)), [resultado] )
    const [nombrePlan] = useCallback ( PLANES.filter(p => p.id === Number(plan)), [resultado] )

    if(resultado === 0) return null
  return (
    <div className="bg-indigo-100 mt-5 p-5 rounded-md shadow-sm">
        <h2 className="text-gray-700 font-bold text-2xl text-center">Resumen</h2>
        
        <p className="pl-4 my-2 text-gray-700 font-semibold">
        Marca:
            <span className="text-gray-700 font-bold"> {nombreMarca.nombre} </span>
        </p>

        <p className="pl-4 my-2 text-gray-700 font-semibold">
        Modelo:
            <span className="text-gray-700 font-bold "> Año {yearRef.current} </span>
        </p>

        <p className="pl-4 my-2 text-gray-700 font-semibold">
        Plan:
            <span className="text-gray-700 font-bold "> {nombrePlan.nombre} </span>
        </p>

        <p className="pl-4 my-5 text-gray-700 font-bold text-2xl ">
        Total: 
            <span className="text-gray-700 font-bold ">  {resultado} </span>
        </p>
    </div>
  )
}

export default Resultado