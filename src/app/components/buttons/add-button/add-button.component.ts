import { Component, OnInit, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {
  faPlus = faPlus;
  @Input() text: string;


  constructor() { }

  ngOnInit(): void {}

  onClick() {
    console.log('Added')
  }
}
