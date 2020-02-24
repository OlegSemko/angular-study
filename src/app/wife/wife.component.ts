import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wife',
  templateUrl: './wife.component.html',
  styleUrls: ['./wife.component.scss']
})
export class WifeComponent implements OnInit {
  @Output() onClicked = new EventEmitter();
  onClick(number: any) {
    console.log('mum', number);
    this.onClicked.emit(number);

  }

  items: number[] = [1,2,3,4,5,6];

  name='mum'
  sun="blue car"
  doughter="pink doll"
  constructor() { }

  ngOnInit() {
  }

}
