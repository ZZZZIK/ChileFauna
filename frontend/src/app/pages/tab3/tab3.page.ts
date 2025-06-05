import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

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
      imagen: 'assets/imgs/news_puma00.jpg', 
      fuente: 'BioBio Chile',
      enlace: 'https://www.biobiochile.cl/noticias/nacional/region-de-los-rios/2025/02/10/camara-capta-momento-en-que-puma-se-lleva-a-gato-en-la-comuna-de-los-lagos-vecinos-informaron-al-sag.shtml'
    },
    {
      titulo: 'Titulado estudió los nidos de los cóndores para titularse',
      descripcion: 'Tomás Dillon investigó los nidos del cóndor andino para su tesis, identificando que factores como altura y pendiente son cruciales para su nidificación. Los hallazgos ayudan en la conservación de la especie.',
      imagen: 'assets/imgs/news_condor00.jpeg', 
      fuente: 'Universidad de Chile',
      enlace: 'https://forestal.uchile.cl/noticias/224628/titulado-estudio-los-nidos-de-los-condores-para-titularse?utm_source=chatgpt.com'
    },
    {
      titulo: 'Nuevos hallazgos sobre el zorro de Darwin en el Bío-Bío brindan esperanzas de su conservación',
      descripcion: 'Los resultados parciales de la primera etapa de investigación del proyecto “Conservación del Zorro de Darwin en la interface Parque Nahuelbuta-áreas bordes: integrando factores ecológicos y sociales”, fueron expuestos a representantes de las instituciones patrocinantes, autoridades competentes, socios de la iniciativa y miembros de la comunidad en general.',
      imagen: 'assets/imgs/news_zorrodarwin00.jpg',
      fuente: 'BioBio Chile',
      enlace: 'https://www.biobiochile.cl/noticias/2012/05/10/nuevos-hallazgos-sobre-el-zorro-de-darwin-en-el-bio-bio-brindan-esperanzas-de-su-conservacion.shtml'
    },
    {
      titulo: 'Las ranitas de Darwin están al borde de la extinción en Chile tras compleja "pandemia de los anfibios"',
      descripcion: 'La ranita de Darwin, endémica del sur de Chile, destaca por su reproducción única: el macho cuida los huevos en su boca. Está en peligro de extinción por pérdida de hábitat y enfermedades.',
      imagen: 'assets/imgs/news_ranitadarwin00.jpg',
      fuente: 'BioBio Chile',
      enlace: 'https://www.biobiochile.cl/especial/aqui-tierra/noticias/2024/12/09/las-ranitas-de-darwin-estan-al-borde-de-la-extincion-en-chile-tras-compleja-pandemia-de-los-anfibios.shtml'
    }
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getNoticias().subscribe((data) => {
      this.noticias = data;
    });
  }
  
}
