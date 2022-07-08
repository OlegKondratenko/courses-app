import { Component } from '@angular/core';
import { mockedCourseList } from './mocks/mocks';
import { ModalService } from './shared/components/modal-window/modal-window.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'courses-app';
  couseList = mockedCourseList;
  constructor(private modalService: ModalService) {}
  openModal(id: string) {
    this.modalService.open(id);
  }
}
