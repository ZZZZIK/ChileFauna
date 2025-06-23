import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {

  textoBusqueda: string = '';
  categoriaSeleccionada: string = '';

  animales = [
    {
      nombre: 'Pudú',
      especie: 'Pudu puda',
      categoria: 'Herbivoro',
      imagen: 'https://www.ecoregistros.org/site/images/dataimages/2017/04/16/198858/_81G7339-copia.jpg',
      favorito: false,
      descripcion: 'El pudú es el ciervo más pequeño del mundo, endémico de los bosques del sur de Chile y Argentina.'
    },
    {
      nombre: 'Puma',
      especie: 'Puma concolor',
      categoria: 'Carnivoro',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Puma_%28205773461%29.jpeg',
      favorito: true,
      descripcion: 'El puma es un felino sigiloso y cazador solitario.'
    },
    {
      nombre: 'Zorro culpeo',
      especie: 'Lycalopex culpaeus',
      categoria: 'Carnivoro',
      imagen: 'https://s3.animalia.bio/animals/photos/full/1.25x1/AHn0Va4NFLXlNURKbruI.webp?id=b88a790fa93c46bc090bccfe6577fd9f',
      favorito: true,
      descripcion: 'Este zorro es el segundo cánido más grande de Sudamérica, conocido por su pelaje rojizo.'
    }
  ];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getEspecies().subscribe((data) => {
      this.animales = data;
    });
  }

  get animalesFiltrados() {
    if (!this.animales) return [];

    const texto = this.textoBusqueda.toLowerCase();

    return this.animales.filter(animal => {
      const nombre = animal.nombre ? animal.nombre.toLowerCase() : '';
      const especie = animal.especie ? animal.especie.toLowerCase() : '';
      const categoria = animal.categoria ? animal.categoria : '';

      return (
        (nombre.includes(texto) || especie.includes(texto)) &&
        (this.categoriaSeleccionada === '' || categoria === this.categoriaSeleccionada)
      );
    });
  }

  filtrarPorCategoria(categoria: string) {
    this.categoriaSeleccionada = this.categoriaSeleccionada === categoria ? '' : categoria;
  }

  toggleFavorito(animal: any) {
    animal.favorito = !animal.favorito;
  }

  verDetalles(animal: any) {
    this.router.navigate(['/animal-detalle'], {
      state: { animal }
    });
  }
}