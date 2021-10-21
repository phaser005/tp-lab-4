import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnsModuleComponent } from './turns-module.component';

describe('TurnsModuleComponent', () => {
  let component: TurnsModuleComponent;
  let fixture: ComponentFixture<TurnsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnsModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
