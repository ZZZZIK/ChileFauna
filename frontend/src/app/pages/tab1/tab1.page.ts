import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  esAdmin: boolean = false;

  categorias: any[] = [];
   
//    { nombre: 'Mamíferos', imagen: 'assets/imgs/pumaMAMIFERO.jpg', ruta: '/mamiferos' },
  //  { nombre: 'Aves', imagen: 'assets/imgs/caiquenAVE.jpg', ruta: '/aves' },
 //   { nombre: 'Reptiles', imagen: 'assets/imgs/lagartijaREPTIL.jpg', ruta: '/reptiles' },
 //   { nombre: 'Insectos', imagen: 'assets/imgs/chinitachilenaINSECTO.jpg', ruta: '/insectos' },
 //   { nombre: 'Peces', imagen: 'assets/imgs/puyePEZ.jpg', ruta: '/peces' },
  //  { nombre: 'Anfibios', imagen: 'assets/imgs/ranachilenaANFIBIO.jpg', ruta: '/anfibios' }
 // ];

  constructor(private apiService: ApiService) {}

  
  ngOnInit() {
    this.esAdmin = this.apiService.esAdmin();
    this.cargarCategorias();
  }


  cargarCategorias() {
    this.apiService.getCategorias().subscribe((data) => {
      console.log('Categorías recibidas:', data);
      this.categorias = data;
    });
  }

  eliminarCategoria(id: number) {
    this.apiService.eliminarCategoria(id).subscribe({
      next: () => this.cargarCategorias(),
      error: err => console.error('Error al eliminar:', err)
    });
  }

  crearCategoria() {
    const nueva = {
      nombre: 'Nueva categoría',
      descripcion: 'Descripción de ejemplo'
    };

    this.apiService.crearCategoria(nueva).subscribe({
      next: () => this.cargarCategorias(),
      error: err => console.error('Error al crear:', err)
    });
  }

}
