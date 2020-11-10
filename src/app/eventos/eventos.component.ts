import { AltaEventoComponent } from './alta-evento/alta-evento.component';
import { eventmodel } from './models/eventmodel';
import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: eventmodel[] = [];

  miarray;




  constructor() {
    // this.eventos.push(new eventmodel('Lucian', 'lucian@getMaxListeners.com', 'Valencia', 'Mucha'));
    this.eventos.push(new eventmodel('Lucian', 'lucian@getMaxListeners.com', 'Valencia', 'Mucha'));



    this.miarray = [1, 2, 3, 4, 5];

  }

  // aqui poner input y output

  // @Output() methodName = new EventEmitter<Class>();

  ngOnInit(): void {


  }



}
