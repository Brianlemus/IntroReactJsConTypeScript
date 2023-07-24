
export const Funciones = () => {
  
    // es recomendable indicar que va retornar la funcion para evitar cruce de informacion
    const sumar = (a : number , b : number) : number => {
        return a + b ;
    }
  
    return (
    <>
        <h3>Funciones TSX</h3>
        <span>el resulta es : { sumar(10,5)}</span>
    </>
  )
}
