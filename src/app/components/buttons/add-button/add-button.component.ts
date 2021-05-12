import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {
  @Input() text: string;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
