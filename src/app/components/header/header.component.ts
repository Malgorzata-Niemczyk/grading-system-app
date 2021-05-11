 import { Component, OnInit } from '@angular/core';
 import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
 import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title:string = 'Grading system';
  faArrowLeft = faArrowLeft;
  faEllipsisV = faEllipsisV;

  constructor() { }

  ngOnInit(): void {
  }

}
