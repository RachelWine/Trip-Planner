import { Component, OnInit } from '@angular/core';
import { DeparturesService } from '../services/departures.service';
import IDeparture from '../../../../server/src/interfaces/IDeparture';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {
  public m_departures: IDeparture[];
  private m_service: DeparturesService;

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
}

