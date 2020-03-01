import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFlagComponent } from './set-flag.component';

describe('SetFlagComponent', () => {
  let component: SetFlagComponent;
  let fixture: ComponentFixture<SetFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
