import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

/* CONFIGURACIONES PARA EL STORE - NGRX */
import { contadorReducer } from './contador/contador.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
    providers: [
        /* PROVEEDOR DE LAS RUTAS */
        provideRouter(routes),
        /* PROVEEDOR DEL CLIENTE */
        provideClientHydration(),
        /* NGRX */
        provideStore({ contador: contadorReducer }),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
    ]
};
