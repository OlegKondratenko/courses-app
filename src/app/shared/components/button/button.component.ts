import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() icon?: IconDefinition;
  @Input() type?: string;
  @Output() btnClick = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  
  onClick() {
    this.btnClick.emit();
  }
}
