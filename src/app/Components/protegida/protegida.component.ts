import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Estudiantes, ServicioService } from '../../Services/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrl: './protegida.component.css'
})
export class ProtegidaComponent {
   
  estudiantes: Estudiantes []= [];

  constructor(private _estudianteServicio: ServicioService, private router:Router){

  }

  mostrarEstudiantes(cadena: string){
    if(cadena === 'todos'){
      this.estudiantes = this._estudianteServicio.getEstudiantes();
    }
    if(cadena === 'deudores'){
      this.estudiantes = this._estudianteServicio.getEstudiantes().filter(estudiante => estudiante.deuda > '0');
    }
    if(cadena === 'no-deudores'){
      this.estudiantes = this._estudianteServicio.getEstudiantes().filter(estudiante => estudiante.deuda === '0');
    }
  }

  verEstudiante(id:number){
    this.router.navigate(['/info', id]);
  }
}
