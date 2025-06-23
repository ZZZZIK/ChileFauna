import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-detalle',
  templateUrl: './animal-detalle.page.html',
  styleUrls: ['./animal-detalle.page.scss'],
  standalone: false
})
export class AnimalDetallePage {
  animal: any;

  // Bloques visibles (Estado conservación y Avistamientos)
  estadoConservacionVisible = false;
  zonaAvistamientosVisible = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.animal = nav?.extras?.state?.['animal'];
  }

  volver() {
    this.router.navigate(['/tabs/tab2']);
  }

  toggleBloque(tipo: string) {
    if (tipo === 'conservacion') {
      this.estadoConservacionVisible = !this.estadoConservacionVisible;
    } else if (tipo === 'avistamientos') {
      this.zonaAvistamientosVisible = !this.zonaAvistamientosVisible;
    }
  }
}