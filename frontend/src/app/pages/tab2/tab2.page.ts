import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

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
      imagen: '',
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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getEspecies().subscribe((data) => {
      this.animales = data;
    });
  }

  get animalesFiltrados() {
    // si animal es null o undefined, evita el error
    if (!this.animales) {
      return []; 
    }

    const texto = this.textoBusqueda.toLowerCase();

    return this.animales.filter(animal => {
      // asegura que animal y sus propiedades existen antes de usarlas
      const nombre = animal.nombre ? animal.nombre.toLowerCase() : '';
      const especie = animal.especie ? animal.especie.toLowerCase() : '';
      const categoria = animal.categoria ? animal.categoria : ''; // categoria no necesita toLowerCase si es para comparación directa

      return (
        (nombre.includes(texto) || especie.includes(texto)) &&
        (this.categoriaSeleccionada === '' || categoria === this.categoriaSeleccionada)
      );
    });
  }

  filtrarPorCategoria(categoria: string) {
    if (this.categoriaSeleccionada === categoria) {
      this.categoriaSeleccionada = '';
    } else {
      this.categoriaSeleccionada = categoria;
    }
  }

  toggleFavorito(animal: any) {
    animal.favorito = !animal.favorito;
  }
  
}