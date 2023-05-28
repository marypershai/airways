import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketToComponent } from './ticket-to.component';

describe('TicketToComponent', () => {
  let component: TicketToComponent;
  let fixture: ComponentFixture<TicketToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketToComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
