import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSessionLoginComponent } from './no-session-login.component';

describe('NoSessionLoginComponent', () => {
  let component: NoSessionLoginComponent;
  let fixture: ComponentFixture<NoSessionLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSessionLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSessionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
