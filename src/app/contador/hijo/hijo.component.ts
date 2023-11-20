import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NietoComponent } from '../nieto/nieto.component';
import { Store } from '@ngrx/store';
import { NgRx } from '../interfaces/AppNgRx';
import { dividir, multiplicar } from '../contador.actions';

@Component({
    selector: 'app-hijo',
    standalone: true,
    imports: [CommonModule, NietoComponent],
    templateUrl: './hijo.component.html',
    styleUrl: './hijo.component.css'
})
export class HijoComponent {

    contador!: number

    constructor(private Store: Store<NgRx>) {

        /* SUBSCRIPCION AL ESCUCHA DEL VALOR CENTRARL EN CUANTO EXISTA ALGUN CAMBIO */
        /* Selecciono el nodo especifico y en automatico manda el resultado */
        this.Store.select('contador').subscribe(contador => this.contador = contador)
    }

    /* EMIT: EJECUTA UN CAMBIO A NIVEL ESCUCHA: TODO LO QUE SE ENCUENTE RELACIONADO */
    multiplicar() {

        /* MULTIPLICAR CON LA ACTION */
        this.Store.dispatch(multiplicar({ numero: 3 }))
    }

    /* EMIT: EJECUTA UN CAMBIO A NIVEL ESCUCHA: TODO LO QUE SE ENCUENTE RELACIONADO */
    dividir() {
        /* DIVIDIR CON LA ACTION */
        this.Store.dispatch(dividir({ numero: 3 }))
    }

}
