 import { Component, OnInit } from '@angular/core';
 import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
 import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Grading system';
  faGraduationCap = faGraduationCap;
  faHome = faHome;

  constructor() { }

  ngOnInit(): void {
  }

}
