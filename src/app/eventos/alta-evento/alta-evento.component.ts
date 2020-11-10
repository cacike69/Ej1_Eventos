import { eventmodel } from './../models/eventmodel';
import { EventosComponent } from './../eventos.component';
import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-alta-evento',
  templateUrl: './alta-evento.component.html',
  styleUrls: ['./alta-evento.component.css']
})
export class AltaEventoComponent implements OnInit {

eventvar: eventmodel;

@Output() cambio = new EventEmitter();



  constructor() { }

 alta_evento(Nombre,Correo,Lugar,Descripcion) {

  console.log(Nombre,Correo,Lugar,Descripcion);


 this.eventvar =new eventmodel(Nombre, Correo, Lugar, Descripcion);





 }


  ngOnInit(): void {

  }

  cambiar(){
    this.cambio.emit(this.alta_evento);
  }




}
