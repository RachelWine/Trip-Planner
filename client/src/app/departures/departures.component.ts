import { Component, OnInit } from '@angular/core';
import { DeparturesService } from '../services/departures.service';
import IDeparture from '../../../../server/src/interfaces/IDeparture';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {
  private m_input: object;
  public m_departures: IDeparture[];
  private m_service: DeparturesService;
  private m_options: object;
  private m_best_options: object;
  private m_best_distance_from_goal: number;
  public m_best_option: string;
  public m_final_best_options: string[];


  constructor(private service: DeparturesService) {
    this.m_departures = [];
    this.m_service = service;
   }

  ngOnInit(): void {
    this.m_service.getAll()
    .subscribe(
      res =>
        this.m_departures = res as IDeparture[])
  }

  receiveInput($event) {
    this.m_input = {};
    this.m_options = {};
    this.m_best_options = {};
    this.m_best_distance_from_goal = 0;
    this.m_final_best_options = [];
    this.m_best_option = "";

    this.m_input = $event;
    this.m_input['hour'] = this.converTimeToNumber(this.m_input['hour']);
  }

  onRequestSearch() {
    this.findOptionalDeparturesBySelectedDay(this.m_input['day']);

    this.findOptionsWithinHour();

    this.findFinalOptions();
  }


  findOptionalDeparturesBySelectedDay(day: string): void {
    for (let i = 0; i < this.m_departures.length; i++) {
      if (this.m_departures[i][day] === true) {
        this.m_options[i] = [];
        for (let j = 0; j < this.m_departures[i]['departures'].length; j++) {
          this.m_options[i].push(this.m_departures[i].departures[j]);
        }
      }
    }
  }

  findOptionsWithinHour(): void {
    for (let train in this.m_options) {
      this.m_best_options = {};
      for (let i = 0; i < this.m_options[train].length; i++) {
        let option_as_min = this.converTimeToNumber(this.m_options[train][i]);
        if (option_as_min <= this.m_input['hour']+60 && option_as_min >= this.m_input['hour']-60) {
          let distance_from_goal = option_as_min - this.m_input['hour'];
          this.m_best_options[this.m_options[train][i]] = distance_from_goal;
          if (Math.abs(distance_from_goal) <= this.m_best_distance_from_goal) {
            this.m_best_distance_from_goal = Math.abs(distance_from_goal);
            this.m_best_option = this.m_options[train][i];
          }
        }
      }
    }
  }

  findFinalOptions(): void {
    let obj_final = this.peekFinalResults(this.orderOptions(this.m_best_options))
    for (let final_option in obj_final) {
      this.m_final_best_options.push(final_option);
    }
  }


  converTimeToNumber(time: string) {
    let hour_split = time.split(':');
    let total_min = parseInt(hour_split[0])*60 + parseInt(hour_split[1]);
    return total_min;
  }

  orderOptions(options) {
    let sortable = [];
    for (var option in options) {
      sortable.push([option, options[option]]);
    }

    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });

    return sortable;
  }

  peekFinalResults(options) {
    let final = {};
    let before = {};
    let after = {};

    for (let i = 0; i < options.length; i++) {
      if (options[i][1] == this.m_best_distance_from_goal) {
        final[options[i][0]] = options[i][1];
      }
      else if (options[i][1] < this.m_best_distance_from_goal) {
        before[options[i][0]] = options[i][1];
      }
      else if (options[i][1] > this.m_best_distance_from_goal) {
        after[options[i][0]] = options[i][1];
      }}

      let ordered_before = this.orderOptions(before);
      let ordered_after = this.orderOptions(after);

      for (let i = 0; i < 2; i++) {
        if (ordered_before[i]) {
          final[ordered_before[i][0]] = ordered_before[i][1];
        }
        if (ordered_after[i]) {
          final[ordered_after[i][0]] = ordered_after[i][1];
        }

      }

      return final;
    }
    }


