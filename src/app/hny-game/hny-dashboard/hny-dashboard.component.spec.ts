import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HnyDashboardComponent } from './hny-dashboard.component';

describe('HnyDashboardComponent', () => {
  let component: HnyDashboardComponent;
  let fixture: ComponentFixture<HnyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HnyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HnyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
