import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-properties',
  templateUrl: './input-output-properties.component.html',
  styleUrls: ['./input-output-properties.component.css']
})
export class InputOutputPropertiesComponent implements OnInit {

  nomeCurso: string = 'Angular';
  valorInicial: number = 15;

  constructor() { }

  ngOnInit() {
  }

  onMudouValor(evento){
    console.log(evento.novoValor)
  }

}
