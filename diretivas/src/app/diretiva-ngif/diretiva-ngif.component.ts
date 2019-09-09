import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ['Angular 2'];
  mostrarCursos: boolean = false;
  mostrarCursosTemplate: string = "Mostrar";
  constructor() { }

  ngOnInit() {
  }

  onMostrar() {
    this.mostrarCursos = !this.mostrarCursos
    this.mostrarCursosTemplate = this.mostrarCursosTemplate == "Mostrar" ? "Esconder" : "Mostrar";
  }

}
