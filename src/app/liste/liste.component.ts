import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  personnages: string[] = ["Twilight Sparkle", "Fluttershy", "Pinkie Pie", "Princesse Celestia", "Rarity", "Rainbow dash"]

  constructor() { }

  ngOnInit(): void {
  }

}
