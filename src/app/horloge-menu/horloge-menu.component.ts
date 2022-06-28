import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horloge-menu',
  templateUrl: './horloge-menu.component.html',
  styleUrls: ['./horloge-menu.component.scss']
})
export class HorlogeMenuComponent implements OnInit {

  timezones: string[] = [
    'Africa/Abidjan',
    'Europe/Paris',
    'Europe/Helsinki',
    'America/Los_Angeles'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setTime(timezone: string): string {
    const date: string = new Date().toLocaleString('fr-FR', { timeZone: timezone})
    const time = date.split(' ')[1];
    setInterval(() => {
      this.setTime(timezone)
    }, 1000);
    return time;
  }

}
