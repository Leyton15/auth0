import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

    private estudiantes: Estudiantes[] = [
    {
      cedula: '0701111111',
      nombre: 'Pedro Martinez',
      edad: '21',
      direccion: 'Cuenca, Ecuador',
      observacion: 'Destacado en matemáticas',
      anio: 'basica',
      deuda: '50',
      id: 1
    },
    {
      cedula: '0702222222',
      nombre: 'Ana Lopez',
      edad: '19',
      direccion: 'Loja, Ecuador',
      observacion: 'Participante en actividades culturales',
      anio: 'preparatoria',
      deuda: '0',
      id: 2
    },
    {
      cedula: '0703333333',
      nombre: 'Carlos Sanchez',
      edad: '23',
      direccion: 'Manta, Ecuador',
      observacion: 'Excelente en ciencias',
      anio: 'bachillerato',
      deuda: '200',
      id: 3
    },
    {
      cedula: '0704444444',
      nombre: 'Laura Gomez',
      edad: '20',
      direccion: 'Ambato, Ecuador',
      observacion: 'Participante en actividades deportivas',
      anio: 'basica',
      deuda: '0',
      id: 4
    },
    {
      cedula: '0705555555',
      nombre: 'Diego Castro',
      edad: '22',
      direccion: 'Esmeraldas, Ecuador',
      observacion: 'Destacado en música',
      anio: 'preparatoria',
      deuda: '100',
      id: 5
    },
    {
      cedula: '0706666666',
      nombre: 'Sofia Ramirez',
      edad: '21',
      direccion: 'Portoviejo, Ecuador',
      observacion: 'Participante en actividades sociales',
      anio: 'bachillerato',
      deuda: '0',
      id: 6
    },
    {
      cedula: '0707777777',
      nombre: 'Andres Castro',
      edad: '19',
      direccion: 'Ibarra, Ecuador',
      observacion: 'Destacado en arte',
      anio: 'basica',
      deuda: '50',
      id: 7
    },
    {
      cedula: '0708888888',
      nombre: 'Valeria Mendoza',
      edad: '23',
      direccion: 'Santo Domingo, Ecuador',
      observacion: 'Participante en actividades científicas',
      anio: 'prepatoria',
      deuda: '0',
      id: 8
    },
    {
      cedula: '0709999999',
      nombre: 'Maria Rodriguez',
      edad: '18',
      direccion: 'Quito, Ecuador',
      observacion: 'Destacada en deportes',
      anio: 'bachillerato',
      deuda: '0',
      id: 9
    },
    {
      cedula: '0710000000',
      nombre: 'Juan Perez',
      edad: '24',
      direccion: 'Guayaquil, Ecuador',
      observacion: 'Participante en actividades académicas',
      anio: 'basica',
      deuda: '100',
      id: 10
    }
  ];

  getEstudiantes() {
    return this.estudiantes;
  }

  getEstudiante(id: number) {
    return this.estudiantes.find(item => id == item.id);
  }
  
  

  constructor() { }
}

export interface Estudiantes {
  cedula:string;
  nombre:string;
  edad:string;
  direccion:string;
  observacion:string;
  anio:string;
  deuda:string;
  id: number;
}