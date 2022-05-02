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
  tipos: Array<{ [key: string]: any }> = [];

  constructor(private plantaService: PlantaService) { }

  traerPlantas(): void {
    this.plantaService.traerPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.tipoContador();
    });
  }

  tipoContador(): void {
    let contador: { [key: string]: number } = {};

    this.plantas.forEach(planta => {
      if (contador.hasOwnProperty(planta.tipo)) {
        contador[planta.tipo]++;
      } else {
        contador[planta.tipo] = 1;
      }
    });

    let tipos: Array<{ [key: string]: any }> = [];
    Object.keys(contador).forEach(key => {
      tipos.push({ 'cantidad': contador[key], 'tipo': key });
    });

    this.tipos = tipos;
  }

  ngOnInit() {
    this.traerPlantas();
  }

}
