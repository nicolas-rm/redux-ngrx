import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './contador/hijo/hijo.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HijoComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    contador: number

    constructor() {
        this.contador = 10
    }

    /* INCREMENTA UN VALOR */
    incrementar() {
        this.contador++
    }

    /* DECREMENTA UN VALOR */
    decrementar() {
        this.contador--
    }

    /* RECIBE EL NUEVO VALOR DEL COMPONENTE A ESCUCHAR: COMPONENTE HIJO */
    nuevoContador(event: any) {
        this.contador = event
    }
}
