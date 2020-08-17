import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-format',
  templateUrl: './date-format.component.html',
  styleUrls: ['./date-format.component.css']
})
export class DateFormatComponent implements OnInit {

  @Input() inputDate: Date;

  constructor() {
  }

  ngOnInit() {
  }

}
