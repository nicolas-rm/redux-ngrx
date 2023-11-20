/* LAS ACCIONES EN NGRX SON FUNCIONES O CODIGO ESPECIFICO PARA GENERAR UN CAMBIO / UNA ORDEN */

import { createAction } from '@ngrx/store';


export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Counter] Decrementar');
// export const reset = createAction('[Counter Component] Reset');
