import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityOptionComponent } from './city-option.component';

describe('CityOptionComponent', () => {
  let component: CityOptionComponent;
  let fixture: ComponentFixture<CityOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityOptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CityOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
