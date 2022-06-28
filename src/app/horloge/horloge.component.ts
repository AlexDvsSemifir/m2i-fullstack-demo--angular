import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horloge',
  templateUrl: './horloge.component.html',
  styleUrls: ['./horloge.component.scss']
})
export class HorlogeComponent implements OnInit {


  @Input()
  hour!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
