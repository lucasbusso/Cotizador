import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"
import Spinner from "./Spinner"
import Resultado from "./Resultado"

const AppSeguro = () => {

    const { resultado, cargando } = useCotizador()

  return (
    <>
        <header className="my-5">
            <h1 className="text-white text-center text-4xl font-bold">Cotizá el seguro de tu auto</h1>
        </header>

        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow-md rounded-lg p-10 mb-6">
            <Formulario />
            {cargando ? <Spinner /> : <Resultado />}
        </main>
    </>
  )
}

export default AppSeguro