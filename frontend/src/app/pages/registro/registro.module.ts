import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistroPageRoutingModule } from './registro-routing.module';
import { RegistroPage } from './registro.page';

@NgModule({
  imports: [
    RegistroPageRoutingModule,
    RegistroPage // componente standalone
  ]
})
export class RegistroPageModule {}
