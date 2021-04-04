import { Component, OnInit } from '@angular/core';

import { Work } from 'src/app/models/work.model';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  works?: Work[]; currentTutorial?: Work; currentIndex = -1;
  constructor(private tutorialService: WorkService) { }
  ngOnInit(): void {
    this.retrieveTutorials();
  }
  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.works = data;  console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
