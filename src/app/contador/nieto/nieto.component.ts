import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-nieto',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './nieto.component.html',
    styleUrl: './nieto.component.css'
})
export class NietoComponent {

    /* RECIBE EL VALOR DEL COMPONENTE PADRE */
    @Input() contador!: number

    /* EMITE EL VALOR AL COMPONENTE PADRE: SOLAMENTE SE CAMBIA EN EL COMPONENTE HIJO */
    @Output() cambioContador = new EventEmitter<number>()

    constructor() { }

    /* EMIT: EJECUTA UN CAMBIO A NIVEL ESCUCHA: TODO LO QUE SE ENCUENTE RELACIONADO */
    resetear() {
        this.cambioContador.emit(0)
    }

}
