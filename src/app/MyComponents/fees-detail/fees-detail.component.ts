import { Component, OnInit } from '@angular/core';
import { ServerService } from '../shared/server.service';

@Component({
  selector: 'app-fees-detail',
  templateUrl: './fees-detail.component.html'
})
export class FeesDetailComponent implements OnInit {
  filteredString = '';
  constructor(public SService: ServerService) { }

  ngOnInit() {
    this.SService.GetFees();
  }

}
