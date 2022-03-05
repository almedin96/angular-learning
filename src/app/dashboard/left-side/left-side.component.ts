import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  @Input() djete = 'senad';
  @Output() novoDjeteEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  dodajNovoDjete(value: string){
    this.novoDjeteEvent.emit(value);
  }

}
