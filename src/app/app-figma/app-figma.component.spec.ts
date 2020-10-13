import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFigmaComponent } from './app-figma.component';

describe('AppFigmaComponent', () => {
  let component: AppFigmaComponent;
  let fixture: ComponentFixture<AppFigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
