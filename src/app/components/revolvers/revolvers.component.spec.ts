import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevolversComponent } from './revolvers.component';

describe('RevolversComponent', () => {
  let component: RevolversComponent;
  let fixture: ComponentFixture<RevolversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevolversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevolversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
