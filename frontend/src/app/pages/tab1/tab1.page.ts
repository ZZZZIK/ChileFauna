import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  categorias = [
   
    { nombre: 'Mamíferos', imagen: 'assets/imgs/pumaMAMIFERO.jpg', ruta: '/mamiferos' },
    { nombre: 'Aves', imagen: 'assets/imgs/caiquenAVE.jpg', ruta: '/aves' },
    { nombre: 'Reptiles', imagen: 'assets/imgs/lagartijaREPTIL.jpg', ruta: '/reptiles' },
    { nombre: 'Insectos', imagen: 'assets/imgs/chinitachilenaINSECTO.jpg', ruta: '/insectos' },
    { nombre: 'Peces', imagen: 'assets/imgs/puyePEZ.jpg', ruta: '/peces' },
    { nombre: 'Anfibios', imagen: 'assets/imgs/ranachilenaANFIBIO.jpg', ruta: '/anfibios' }
  ];

  constructor(private apiService: ApiService) {}

  
  ngOnInit() {
    this.apiService.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

}
