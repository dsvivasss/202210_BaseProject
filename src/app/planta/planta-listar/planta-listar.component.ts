import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import {PlantaService} from '../planta.service';

@Component({
  selector: 'app-planta-listar',
  templateUrl: './planta-listar.component.html',
  styleUrls: ['./planta-listar.component.css']
})
export class PlantaListarComponent implements OnInit {

  plantas: Array<Planta> = [];

  constructor(private plantaService: PlantaService) { }

  traerPlantas(): void {
    this.plantaService.traerPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  ngOnInit() {
    this.traerPlantas();
  }

}
