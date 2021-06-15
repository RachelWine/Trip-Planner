import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-departure',
  templateUrl: './select-departure.component.html',
  styleUrls: ['./select-departure.component.css']
})
export class SelectDepartureComponent implements OnInit {
  public m_choosen_date: string;
  private m_choosen_day: string;
  private m_choosen_hour: string;
  public m_input_to_send: object;
  @Output() inputEvent = new EventEmitter();

  constructor() {
    this.m_input_to_send = {};
  }

  ngOnInit(): void {
  }

  onChange(input: EventTarget) {

    let my_input = input as HTMLInputElement;
    this.m_choosen_date = my_input.value;

    let args: string[] = this.splitDayHour();

    this.m_choosen_day = this.changeDayNumToName(args[0]);
    this.m_choosen_hour = args[1];

    this.m_input_to_send['day'] = this.m_choosen_day;
    this.m_input_to_send['hour'] = this.m_choosen_hour;

    this.inputEvent.emit(this.m_input_to_send);
  }

  splitDayHour(): string[] {
    let res: string[] = this.m_choosen_date.split('T');
    return res;
  }

  changeDayNumToName(day: string): string {
    let res: string;
    let pattern = /(\d{2})\-(\d{2})\-(\d{4})/;
    let date_num: number = new Date(day.replace(pattern, '$3-$2-$1')).getDay();

    switch (date_num) {
      case 0:
        res = "sunday";
        break;
      case 1:
        res = "monday";
        break;
      case 2:
        res = "tuesday";
        break;
      case 3:
        res = "wednesday";
        break;
      case 4:
        res = "thursday";
        break;
      case 5:
        res = "friday";
        break;
      case 6:
        res = "saturday";
        break;
      default:
        res = "";
    }

    return res;
  }
}
