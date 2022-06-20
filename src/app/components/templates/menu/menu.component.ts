import { Component, OnInit } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
{
  type: 'dark',
  message: 'Helcome to my Website! Consulte a disponibilidade de serviços na sua região. Leia mais',
}
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
    this.reset();
  }

  ngOnInit(): void {
  }

  alerts!: Alert[];

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

   reset() {
  this.alerts = Array.from(ALERTS);
  }

}
