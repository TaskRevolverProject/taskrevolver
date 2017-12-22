import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevolverslotsComponent } from './revolverslots.component';

describe('RevolverslotsComponent', () => {
  let component: RevolverslotsComponent;
  let fixture: ComponentFixture<RevolverslotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevolverslotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevolverslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
