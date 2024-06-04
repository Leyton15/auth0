import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  carros:any[] = [
    {
      id:1
    }
  ];

    constructor() { }
}
