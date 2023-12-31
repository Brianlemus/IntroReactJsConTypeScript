import { useEffect, useReducer } from "react"

interface AuthState {
    validando : boolean;
    token: string | null;
    userName: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    userName: '',
    nombre: '',
}

type LoginPaylod = {
    username: string;
    nombre: string
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload : LoginPaylod };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                userName: ''
            }
            
        case "login":
            // destructuramos lo que viene de action.paylod
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'ABC123',
                nombre: nombre,
                userName: username
            }
    
        default:
            return state;
    }

}

export const Login = () => {

    const [{ validando, token, nombre}, dispatch] = useReducer(authReducer, initialState);
    
    useEffect(() => {
      setTimeout(() => {
        dispatch({ type: "logout" })
      }, 1500);
    }, [])

    const login = () => {
        dispatch({ type: 'login', 
            payload: {
                nombre: 'Brian',
                username: 'Blemusm'
            }
        })
    }

    const logout = () => {
        dispatch({ type: 'logout'})
    }

    if(validando ) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }
    
  return (
    <>
        <h3>Login</h3>

        {
            ( token )
            ? <div className="alert alert-success">
                    Autenticado como : { nombre }
                </div>
            : <div className="alert alert-danger">
                    No autenticado
                </div>
        }

        {
            ( token )
            ? 
            (
                <button className="btn btn-danger"
                onClick={logout}
                >
                    logout
                </button>
            )
            : 
            (
                <button className="btn btn-primary"
                onClick={ login}
                >
                    Login
                </button>
            )
        }
    </>
  )
}
