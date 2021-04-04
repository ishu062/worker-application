import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  tutorials?: Tutorial[]; currentTutorial?: Tutorial; currentIndex = -1; job = '';
  constructor(private tutorialService: TutorialService) { }
  ngOnInit(): void {
    this.retrieveTutorials();
  }
  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.tutorials = data;  console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  searchTitle(): void {
    this.tutorialService.findByJob(this.job)
      .subscribe(
        data => {
          this.tutorials = data;  console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
