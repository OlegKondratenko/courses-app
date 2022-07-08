import { Component, Input, OnInit } from '@angular/core';
import { CourseCard } from 'src/app/models';

@Component({
  selector: 'app-couse-card',
  templateUrl: './couse-card.component.html',
  styleUrls: ['./couse-card.component.scss'],
})
export class CouseCardComponent implements OnInit {
  @Input() item?: CourseCard;
  constructor() {}

  ngOnInit(): void {}
}
