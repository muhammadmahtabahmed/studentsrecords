import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollstudentlistComponent } from './enrollstudentlist.component';

describe('EnrollstudentlistComponent', () => {
  let component: EnrollstudentlistComponent;
  let fixture: ComponentFixture<EnrollstudentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollstudentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollstudentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
