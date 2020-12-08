import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        //backgroundColor: 'green',
        // width: '100px',
        height: '0px'
      })),
      state('final', style({
        //backgroundColor: 'red',
        // width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('3000ms')),
      transition('final=>initial', animate('3000ms'))
    ]),
  ]
})
export class DashBoardComponent implements OnInit {

  constructor() { }
  menu$: boolean;
  ngOnInit(): void {
    this.menu$ = false;
  }

  showMenu() {
    this.menu$ = this.menu$ === false ? true : false;
    this.changeState();
  }

  currentState = 'initial';

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

}
