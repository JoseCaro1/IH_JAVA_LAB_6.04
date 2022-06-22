import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAltOneMethodComponent } from './lab-alt-one-method.component';

describe('LabAltOneMethodComponent', () => {
  let component: LabAltOneMethodComponent;
  let fixture: ComponentFixture<LabAltOneMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabAltOneMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabAltOneMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
