import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial: Tutorial = {
    title: '',
    job: '',
    mobile: '',
    email: '',
    place: ''
  };
  submitted = false;
  constructor(private tutorialService: TutorialService) { }
  ngOnInit(): void {
  }
  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      job: this.tutorial.job,
      mobile: this.tutorial.mobile,
      email: this.tutorial.email,
      place: this.tutorial.place
    };
    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      job: '',
      mobile: '',
      email: '',
      place: ''
    };
  }
}
