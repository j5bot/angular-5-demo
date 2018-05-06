import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-enter-button',
  templateUrl: './enter-button.component.html',
  styleUrls: ['./enter-button.component.scss']
})
export class EnterButtonComponent {
  @Input() text: string;
  @Input() icon: string;
  @Output() onClick = new EventEmitter<any>();

  click ($event) {
    this.onClick.emit($event);
  }

  constructor() {
  }

}
