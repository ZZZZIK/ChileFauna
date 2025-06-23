import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalDetallePageRoutingModule } from './animal-detalle-routing.module';

import { AnimalDetallePage } from './animal-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalDetallePageRoutingModule
  ],
  declarations: [AnimalDetallePage]
})
export class AnimalDetallePageModule {}
