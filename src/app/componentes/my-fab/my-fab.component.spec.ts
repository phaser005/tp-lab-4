import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFabComponent } from './my-fab.component';

describe('MyFabComponent', () => {
  let component: MyFabComponent;
  let fixture: ComponentFixture<MyFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
