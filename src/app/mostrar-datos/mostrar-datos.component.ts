import { Component } from '@angular/core';
import { DatosService } from '../datos-service.service';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.css']
})
export class MostrarDatosComponent {
  datosEnviados: any;

  constructor(private datosService: DatosService) {
    // OBTENER LOS DATOS DEL SERVICIO
    this.datosEnviados = this.datosService.getDatos();
  }
}
