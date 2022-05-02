import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaListarComponent } from './planta-listar/planta-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PlantaListarComponent],
  declarations: [PlantaListarComponent]
})
export class PlantaModule { }
