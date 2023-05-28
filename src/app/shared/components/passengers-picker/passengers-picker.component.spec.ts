import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersPickerComponent } from './passengers-picker.component';

describe('PassengersPickerComponent', () => {
  let component: PassengersPickerComponent;
  let fixture: ComponentFixture<PassengersPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassengersPickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PassengersPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
