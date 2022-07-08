import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  @Input() title = '';
  @Input() text?: string;

  constructor() {}

  ngOnInit(): void {}
  // Should have @Inputs for title and text, text is optional.
  // Should have content projection (). Button from the example should not be hardcoded.
  // Component's content should be centered.
}
