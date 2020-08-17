import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layouts-footer',
  templateUrl: './layouts-footer.component.html',
  styleUrls: ['./layouts-footer.component.scss']
})
export class LayoutsFooterComponent implements OnInit {

  currentDate: Date;

  constructor() {
  }

  ngOnInit(): void {
    this.currentDate = new Date();
  }

}
