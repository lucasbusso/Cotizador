import { useState, createContext } from 'react'
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers'

const CotizadorContext = createContext()


const CotizadorProvider = ({children}) => {

    const [ datos, setDatos ] = useState({
        marca: '',
        year: '',
        plan:''
    })

    const [ error, setError ] = useState('')

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro =() => {
        //base
        let resultado = 2000 
        //obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)
        //-3% por año
        resultado -= ((diferencia * 3) * resultado) / 100
        //Europeo 30%, Americano 15%, Asiatico 5%
        resultado *= calcularMarca(datos.marca)
        //Basico 20%, completo 50%
        resultado *= calcularPlan(datos.plan)

        //resultado = resultado.toFixed(2)

        //Formatear dinero
        resultado = formatearDinero(resultado)

        console.log(resultado)
    }

    return(
        <CotizadorContext.Provider
        value={{
            datos,
            handleChangeDatos,
            error,
            setError,
            cotizarSeguro
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext