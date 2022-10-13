import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSessionProjectsComponent } from './no-session-projects.component';

describe('NoSessionProjectsComponent', () => {
  let component: NoSessionProjectsComponent;
  let fixture: ComponentFixture<NoSessionProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSessionProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSessionProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
