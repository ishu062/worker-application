import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/models/work.model';
import { WorkService } from 'src/app/services/work.service';
@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css']
})
export class AddWorkComponent implements OnInit {
  tutorial: Work = {
    dates: '',
    job: '',
    mobile: '',
    place: ''
  };
  submitted = false;
  constructor(private workService: WorkService) { }
  ngOnInit(): void {
  }
  saveWork(): void {
    const data = {
      dates: this.tutorial.dates,
      job: this.tutorial.job,
      mobile: this.tutorial.mobile,
      place: this.tutorial.place
    };
    this.workService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newWork(): void {
    this.submitted = false;
    this.tutorial = {
      dates: '',
      job: '',
      mobile: '',
      place: ''
    };
  }
}
