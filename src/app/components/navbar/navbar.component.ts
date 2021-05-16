 import { Component, OnInit } from '@angular/core';
 import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
 import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title: string = 'Grading system';
  faGraduationCap = faGraduationCap;
  faHome = faHome;

  constructor() { }

  ngOnInit(): void {
  }

}
