import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-enter-button',
  templateUrl: './enter-button.component.html',
  styleUrls: ['./enter-button.component.css']
})
export class EnterButtonComponent {
  @Input() text: string;
  @Input() icon: string;
  @Input() click: Function;

  constructor() {
  }

}
