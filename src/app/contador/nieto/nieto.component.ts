import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRx } from '../interfaces/AppNgRx';
import { Store } from '@ngrx/store';
import { resetear } from '../contador.actions';

@Component({
    selector: 'app-nieto',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './nieto.component.html',
    styleUrl: './nieto.component.css'
})
export class NietoComponent {

    contador!: number

    constructor(private Store: Store<NgRx>) {
        this.Store.select('contador').subscribe(contador => this.contador = contador)
    }

    /* EMIT: EJECUTA UN CAMBIO A NIVEL ESCUCHA: TODO LO QUE SE ENCUENTE RELACIONADO */
    resetear() {
        this.Store.dispatch(resetear())
    }

}
