import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../datos-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';

  constructor(private router: Router, private datosService: DatosService) { }

  onSubmit() {
    const confirmar = window.confirm('¿Está seguro de enviar el formulario?');
    if (confirmar) {
      // CAPTURAR DATOS ANTES DE ENVIARLOS
      const datosEnviados = {
        nombre: this.nombre,
        email: this.email
      };

      // GUARDAR LOS DATOS EN EL SERVICIO
      this.datosService.setDatos(datosEnviados);

      // REDIRECCION A LA NUEVA VENTANA
      this.router.navigate(['/mostrar-datos']);
    } else {
      console.log('El formulario no fue enviado');
    }
  }

  camposValidos(): boolean {
    return !!this.nombre && !!this.email;
  }
}
