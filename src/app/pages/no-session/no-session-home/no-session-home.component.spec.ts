import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSessionHomeComponent } from './no-session-home.component';

describe('NoSessionHomeComponent', () => {
  let component: NoSessionHomeComponent;
  let fixture: ComponentFixture<NoSessionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSessionHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSessionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
