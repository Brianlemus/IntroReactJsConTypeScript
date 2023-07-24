import { useEffect, useRef, useState } from 'react';
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';

export const useUsuarios = () => {
    console.log('llamando el componente');
    
    const [usuario, setUsuario] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {
        //    llamado al API
        const resp = await reqResApi.get<ReqResListado>('/users',{
            params: {
                // para mandar solo el valor del objeto .current
                page: paginaRef.current
            }
        })

        if (resp.data.data.length > 0) {
            setUsuario(resp.data.data);
        }else{
            paginaRef.current --;
            alert('No hay mas registros');
        }
        
        // .then( resp => {
        //     setUsuario(resp.data.data)
        // })
        // .catch( console.log)
    }

    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if (paginaRef.current >1 ) {
            paginaRef.current --;
            cargarUsuarios();
        }
    }

    return {
        usuario,
        paginaSiguiente,
        paginaAnterior,
        // no exponso la cargaUsuarios
        // cargarUsuarios
    }

}
