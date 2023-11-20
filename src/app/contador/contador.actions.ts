/* LAS ACCIONES EN NGRX SON FUNCIONES O CODIGO ESPECIFICO PARA GENERAR UN CAMBIO / UNA ORDEN */

import { createAction, props } from '@ngrx/store';


export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');

/* DEFINIR UNA ACTION CON PARAMETROS */
export const multiplicar = createAction(
    '[Contador] Multiplicar',
    /* nombre del parametro y si tipo de dato */
    props<{ numero: number }>()
);

/* DEFINIR UNA ACTION CON PARAMETROS */
export const dividir = createAction(
    '[Contador] Dividir',
    /* nombre del parametro y si tipo de dato */
    props<{ numero: number }>()
);

export const resetear = createAction('[Contador] Resetear');
