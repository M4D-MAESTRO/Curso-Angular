import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  valorAtual:string = '';
  valorSalvo:string;
  isMouseOver:boolean = false;

  botaoClick(){
   alert('Clickado') 
  }

  onKeyUp(event:KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>event.target).value
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }
  onMouseOverOut(){
     this.isMouseOver = !this.isMouseOver
  }

  constructor() { }

  ngOnInit() {
  }

}
