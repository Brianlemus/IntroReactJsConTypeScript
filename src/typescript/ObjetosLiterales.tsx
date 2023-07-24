
// type, para tipar los campos del objeto
// class, sirve para crear instancias y si tiene una representacion
// interface es mas facil de expandir que un tipo

// es para moldear o definir tipos del objeto como lucira
// con esto evitamos mala interpretacion de datos
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
    // forma que pensarian que se hace pero es incorrecto
    // direccion : {
    //     pais : string;
    //     casaNo: number;
    // }
}

// la forma correcta es que se define el objeto principal y despues se definen el resto de interfaces del objeto principal
interface Direccion {
    pais : string;
    casaNo: number
}

// esto no funciona las interfaces solo es para ponerle reglas de validación a los objetos
// cont persona = new personalbar();
// para hacer eso deberian crear una class

export const ObjetosLiterales = () => {

    // cuando declaras la interface es para ver que cumpla las condiciones y validacion
    const persona : Persona = {
        nombreCompleto : 'Brian',
        edad: 27,
        direccion : {
            pais: 'Guatemala',
            casaNo: 710
        }
    }

    // no se puede usar asi en puro javascript si deja pero en type script debes de declararlo para usarlo
    // persona.nombreCompleto = 'Wuilmarck Lemus';

  return (
    <>
        <h3>Objetos literales </h3>
        {/* transfomra un json como que si fuera un string */}
        {/* {JSON.stringify(persona)} */}

        {/* forma para llamarlo con scroll */}
        <code>
            <pre>
                {/* el campo null, o mejor conocida esta funcion como reemplace es para indicar que campo necesitas */}
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </>
  )
}
