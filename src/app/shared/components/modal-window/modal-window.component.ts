import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from './modal-window.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent implements OnInit {
  @Input() title?: string;
  @Input() message?: string;
  @Input() okButtonText?: string;
  @Input() cancelButtonText?: string;
  @Output() result = new EventEmitter<boolean>();
  @Input() id?: string;
  faCancel = faCancel;
  isOpen = false;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.add(this);
    this.modalService.showModals();
    console.log(this.id);
  }
  open(): void {
    this.isOpen = true;
  }
  close(): void {
    this.isOpen = false;
  }
}
