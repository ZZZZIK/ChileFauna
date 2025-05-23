import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  textoBusqueda: string = '';
  categoriaSeleccionada: string = '';

  animales = [
    {
      nombre: 'Puma',
      especie: 'Puma concolor',
      categoria: 'Carnivoro',
      imagen: 'https://www.kleankanteen.cl/wp-content/uploads/2019/01/puma2-1024x683.jpg',
      favorito: true
    },
    {
      nombre: 'Pudú',
      especie: 'Pudu puda',
      categoria: 'Herbivoro',
      imagen: 'https://www.ecoregistros.org/site/images/dataimages/2017/04/16/198858/_81G7339-copia.jpg',
      favorito: false
    },
    {
      nombre: 'Zorro culpeo',
      especie: 'Lycalopex culpaeus',
      categoria: 'Carnivoro',
      imagen: 'https://s3.animalia.bio/animals/photos/full/1.25x1/AHn0Va4NFLXlNURKbruI.webp?id=b88a790fa93c46bc090bccfe6577fd9f',
      favorito: true
    }
  ];

  constructor() {}

  get animalesFiltrados() {
    const texto = this.textoBusqueda.toLowerCase();

    return this.animales.filter(animal =>
      (animal.nombre.toLowerCase().includes(texto) ||
       animal.especie.toLowerCase().includes(texto))
       &&
      (this.categoriaSeleccionada === '' || animal.categoria === this.categoriaSeleccionada)
    );
  }

  filtrarPorCategoria(categoria: string) {
    if (this.categoriaSeleccionada === categoria) {
      this.categoriaSeleccionada = ''; // deselecciona si ya estaba seleccionada
    } else {
      this.categoriaSeleccionada = categoria;
    }
  }

  toggleFavorito(animal: any) {
    animal.favorito = !animal.favorito;
  }

}