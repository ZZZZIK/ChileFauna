import { NgModule } from '@angular/core';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import { Tab4Page } from './tab4.page'; // Standalone component

@NgModule({
  imports: [
    Tab4PageRoutingModule,
    Tab4Page
  ]
})
export class Tab4PageModule {}
