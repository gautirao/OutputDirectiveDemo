import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Output() buttonClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  clicker() {
    this.buttonClicked.emit('button was clicked'+ Math.floor(Math.random() * 20));
  }

}
