
export const TiposBasicos = () => {

    // let es cuando el dato estara cambiando constante
    // let nombre = 'Fernando';
     const nombre: string = 'Fernando';
     const edad: number = 35;
     const estaActivo: boolean = true;

    //  const poderes = ['velocidad', 'volar', 'Respirar bajo el agua'];
    const poderes : string[] = [];

    poderes.push('velocidad');
    poderes.push('123');
    poderes.push('Respirar bajo el agua');

  return (
    <>
        <h3>Tipos Basicos</h3>
        {nombre}. {edad}, {(estaActivo) ? 'Activo' : 'Inactivo'}
        <br/>
        { poderes.join(', ')}
    </>
  )
}
