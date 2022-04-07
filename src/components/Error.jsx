import useCotizador from "../hooks/useCotizador"

const Error = () => {
    const { error } = useCotizador()

  return (
    <div className="border border-red-500 bg-red-200 py-3 text-red-600 text-center font-bold">
        <p>{ error }</p>
    </div>
  )
}

export default Error