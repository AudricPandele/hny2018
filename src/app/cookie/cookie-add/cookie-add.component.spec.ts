import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieAddComponent } from './cookie-add.component';

describe('CookieAddComponent', () => {
  let component: CookieAddComponent;
  let fixture: ComponentFixture<CookieAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
