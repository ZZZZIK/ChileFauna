import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  noticias = [
    {
      titulo: 'Cámara capta a puma que se lleva a gato en la comuna de Los Lagos',
      descripcion: 'Una cámara de seguridad en Los Lagos, región de Los Ríos, captó a un puma llevándose un gato doméstico, resolviendo la misteriosa desaparición de varias mascotas.',
      imagen: 'assets/imgs/noticiaPuma.jpg', 
      fuente: 'BioBio Chile'
    },
    {
      titulo: 'Titulado estudió los nidos de los cóndores para titularse',
      descripcion: 'Tomás Dillon investigó los nidos del cóndor andino para su tesis, identificando que factores como altura y pendiente son cruciales para su nidificación. Los hallazgos ayudan en la conservación de la especie.',
      imagen: 'assets/imgs/noticiaCondor.jpg', 
      fuente: 'Universidad de Chile'
    },
    {
      titulo: 'Zorro de Darwin: La especie en Peligro de Extinción',
      descripcion: 'El zorro de Darwin, endémico de Chile, vive en Chiloé y Nahuelbuta. Su población está en declive por la pérdida de hábitat y ataques de perros domésticos.',
      imagen: 'assets/imgs/noticiaZorro.jpg',
      fuente: 'BioBio Chile'
    },
    {
      titulo: ' El Tesoro de los Bosques Templados, la Ranita de Darwin',
      descripcion: 'La ranita de Darwin, endémica del sur de Chile, destaca por su reproducción única: el macho cuida los huevos en su boca. Está en peligro de extinción por pérdida de hábitat y enfermedades.',
      imagen: 'assets/imgs/noticiaRanita.jpg',
      fuente: 'BioBio Chile'
    }
  ];
}
