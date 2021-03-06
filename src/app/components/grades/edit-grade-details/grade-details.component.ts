import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GradesService } from '../../../services/grades.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { gradesList } from '../grades-list/mock-grades';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-grade-details',
  templateUrl: './grade-details.component.html',
  styleUrls: ['./grade-details.component.scss']
})
export class GradeDetailsComponent implements OnInit {
  faEdit = faEdit;
  faChevronCircleLeft = faChevronCircleLeft;
  alert: boolean = false;

  @Input() grade: gradesList;

  exform = new FormGroup({
    'minPercentage': new FormControl(null, [Validators.min(0), Validators.max(100), Validators.required]),
    'maxPercentage': new FormControl(null, [Validators.min(0), Validators.max(100), Validators.required]),
    'symbolicGrade': new FormControl(null, Validators.required),
    'descriptiveGrade': new FormControl(null, Validators.required)
  });

  constructor(
    private route: ActivatedRoute,
    private GradesService: GradesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.fetchSelectedGrade();
  }

  fetchSelectedGrade(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.GradesService.fetchSelectedGrade(id).subscribe(grade => {
      this.exform = new FormGroup({
        'minPercentage': new FormControl(grade['minPercentage']),
        'maxPercentage': new FormControl(grade['maxPercentage']),
        'symbolicGrade': new FormControl(grade['symbolicGrade']),
        'descriptiveGrade': new FormControl(grade['descriptiveGrade'])
      });
    });
  }

  goBack(): void {
    this.location.back();
  }

  gradesCollection() {
    const id = this.route.snapshot.paramMap.get('id');
    this.GradesService.updateGradeDetails(id, this.exform.value).subscribe(result => this.alert = true);
  }

  closeAlert() {
    this.alert = false;
  }

}
