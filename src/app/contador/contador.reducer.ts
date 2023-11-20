/* UN REDUCER ES UNA FUNCION QUE HACE UN CAMBIO CONFORME A LA ACCION QUE RECIBE */
/* EL REDUCER RECIBE EL ESTADO ACTUAL Y LA ACCION */
/* DEVUELVE UN NUEVO ESTADO CON FORME A LA ACCION MARCADA */

import { Action, State, createReducer, on } from "@ngrx/store";
import { decrementar, dividir, incrementar, multiplicar, resetear } from "./contador.actions";

/* EL RESULTADO DEL REDUCER SE DEBE DE RESOLVER CON TODA LA INFORMACION QUE RECIBE */
/* NO ESTA PERMITIDO REALIZAR PETICIONES,NI CAMBIOS DIRECTAMENTE. */

// export function contadorReducer(state: number = 10, action: Action) {

//     /* AQUI NO SE DISPARAN SERVICIOS */
//     switch(action.type) {

//         case incrementar.type:
//             return state + 1

//         case decrementar.type:
//             return state - 1

//         default:
//             return state
//     }
// }
export const initialState = 0;

/* RECIBE EL STATE, Y ACTION */
export const contadorReducer = createReducer(
    initialState,
    on(incrementar, (state: number) => state + 1),
    on(decrementar, (state: number) => state - 1),

    /* OPERACIONES CON PARAMETROSS */
    on(multiplicar, (state: number, props) => state * props.numero),
    on(dividir, (state: number, props) => state / props.numero),

    on(resetear, (state) => 0)
);
