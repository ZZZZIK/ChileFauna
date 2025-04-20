import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  categorias = [
   
    { nombre: 'Mamíferos', imagen: 'assets/imgs/pumaMAMIFERO.jpg', ruta: '/mamiferos' },
    { nombre: 'Aves', imagen: 'assets/imgs/caiquenAVE.jpg', ruta: '/aves' },
    { nombre: 'Reptiles', imagen: 'assets/imgs/lagartijaREPTIL.jpg', ruta: '/reptiles' },
    { nombre: 'Insectos', imagen: 'assets/imgs/chinitachilenaINSECTO.jpg', ruta: '/insectos' },
    { nombre: 'Peces', imagen: 'assets/imgs/puyePEZ.jpg', ruta: '/peces' },
    { nombre: 'Anfibios', imagen: 'assets/imgs/ranachilenaANFIBIO.jpg', ruta: '/anfibios' },
    { nombre: 'Herbívoros', imagen: 'assets/imgs/guanacoHERBIVORO.jpg', ruta: '/herbivoros'},
    { nombre: 'Carnívoros', imagen: 'assets/imgs/zorroculpeoCARNIVORO.jpg', ruta: '/carnivoros'},
    { nombre: 'Insectívoros', imagen: 'assets/imgs/piuchenINSECTIVORO.jpg', ruta: '/insectivoros'},
    { nombre: 'Omnívoros', imagen: 'assets/imgs/zorzalOMNIVORO.jpg', ruta: '/omnivoros'}
     
  ];

  constructor(private router: Router) {}

  irAMamiferos(){
      this.router.navigate(['/mamiferos']);
  }
  

}
