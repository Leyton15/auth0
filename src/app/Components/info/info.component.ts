import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from '../../Services/servicio.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  ob:any = {}

   constructor(private activateRoute:ActivatedRoute,  private _servicio: ServicioService, private router:Router){
      this.activateRoute.params.subscribe(params => {
        this.ob = this._servicio.getEstudiante(params['id']);
      });  
   }

   verOb(id:number){
      this.router.navigate(['/info', id]);
    }
}
