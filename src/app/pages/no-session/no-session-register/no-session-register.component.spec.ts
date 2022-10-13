import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSessionRegisterComponent } from './no-session-register.component';

describe('NoSessionRegisterComponent', () => {
  let component: NoSessionRegisterComponent;
  let fixture: ComponentFixture<NoSessionRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSessionRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSessionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
