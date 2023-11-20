import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './contador/hijo/hijo.component';

/* NGRX */
import { Store } from '@ngrx/store';
import { decrementar, incrementar } from './contador/contador.actions';
import { NgRx } from './contador/interfaces/AppNgRx';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HijoComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    contador!: number

    constructor(private Store: Store<NgRx>) {
        /* SUBSCRIPCION AL ESCUCHA DEL VALOR CENTRARL EN CUANTO EXISTA ALGUN CAMBIO */
        /* Selecciono el nodo especifico y en automatico manda el resultado */
        this.Store.select('contador').subscribe(contador => this.contador = contador)
    }

    /* INCREMENTA UN VALOR */
    incrementar() {
        this.Store.dispatch(incrementar())
    }

    /* DECREMENTA UN VALOR */
    decrementar() {
        this.Store.dispatch(decrementar())
    }

}
