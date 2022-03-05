import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit {
   trenutnoDjete = "vedin";
    djeca = ['anes', 'ilhan', 'imran'];
  constructor() { }

  ngOnInit(): void {
    
  }

  dodajDjete(dodajNovoDjete: string){
    this.djeca.push(dodajNovoDjete);
  }
  

}
