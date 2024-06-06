import { Component } from '@angular/core';
import { Estudiantes, ServicioService } from '../../Services/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrl: './precios.component.css'
})
export class PreciosComponent {
  estudiantes: Estudiantes []= [];

  constructor(private _estudianteServicio: ServicioService, private router:Router){

  }

  mostrarEstudiantes(cadena: string){
    if(cadena === 'todos'){
      this.estudiantes = this._estudianteServicio.getEstudiantes();
    }
    if(cadena === 'basica'){
      this.estudiantes = this._estudianteServicio.getEstudiantes().filter(estudiante => estudiante.anio === 'basica');
    }
    if(cadena === 'preparatoria'){
      this.estudiantes = this._estudianteServicio.getEstudiantes().filter(estudiante => estudiante.anio === 'preparatoria');
    }
    if(cadena === 'bachillerato'){
      this.estudiantes = this._estudianteServicio.getEstudiantes().filter(estudiante => estudiante.anio === 'bachillerato');
    }
  }

  verEstudiante(id:number){
    this.router.navigate(['/info', id]);
  }
}
