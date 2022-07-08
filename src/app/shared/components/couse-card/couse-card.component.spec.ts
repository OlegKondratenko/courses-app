import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouseCardComponent } from './couse-card.component';

describe('CouseCardComponent', () => {
  let component: CouseCardComponent;
  let fixture: ComponentFixture<CouseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouseCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
