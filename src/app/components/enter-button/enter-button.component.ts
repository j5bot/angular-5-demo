import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-enter-button',
  templateUrl: './enter-button.component.html',
  styleUrls: ['./enter-button.component.css']
})
export class EnterButtonComponent {
  @Input() text: Observable<String>;
  @Input() icon: Observable<String>;
  @Input() click: Function;

  constructor() {

  }

}
