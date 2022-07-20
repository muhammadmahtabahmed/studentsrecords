import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollstudentdetailComponent } from './enrollstudentdetail.component';

describe('EnrollstudentdetailComponent', () => {
  let component: EnrollstudentdetailComponent;
  let fixture: ComponentFixture<EnrollstudentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollstudentdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollstudentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
