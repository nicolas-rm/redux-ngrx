import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NietoComponent } from '../nieto/nieto.component';

@Component({
    selector: 'app-hijo',
    standalone: true,
    imports: [CommonModule, NietoComponent],
    templateUrl: './hijo.component.html',
    styleUrl: './hijo.component.css'
})
export class HijoComponent {

    /* RECIBE EL VALOR DEL COMPONENTE PADRE */
    @Input() contador!: number

    /* EMITE EL VALOR AL COMPONENTE PADRE: SOLAMENTE SE CAMBIA EN EL COMPONENTE HIJO */
    @Output() nuevoContador = new EventEmitter<number>()

    constructor() { }

    /* EMIT: EJECUTA UN CAMBIO A NIVEL ESCUCHA: TODO LO QUE SE ENCUENTE RELACIONADO */
    multiplicar() {
        this.contador = this.contador * 2
        this.nuevoContador.emit(this.contador)
    }

    /* EMIT: EJECUTA UN CAMBIO A NIVEL ESCUCHA: TODO LO QUE SE ENCUENTE RELACIONADO */
    dividir() {
        this.contador = this.contador / 2
        this.nuevoContador.emit(this.contador)
    }

    /* EMIT: EJECUTA UN CAMBIO A NIVEL ESCUCHA: TODO LO QUE SE ENCUENTE RELACIONADO */
    cambioContador(event: any){
        this.contador = event
        this.nuevoContador.emit(event)
    }
}
