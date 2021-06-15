import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-departure',
  templateUrl: './select-departure.component.html',
  styleUrls: ['./select-departure.component.css']
})
export class SelectDepartureComponent implements OnInit {
  date: string ;
  public day: string;
  public hour: string;

  constructor() {
   }

  ngOnInit(): void {
  }

  onChange(input: EventTarget) {
    let my_input = input as HTMLInputElement;
    this.date = my_input.value;
    let fields = this.date.split('T');
    this.day = fields[0];
    this.hour = fields[1];
  }
}
