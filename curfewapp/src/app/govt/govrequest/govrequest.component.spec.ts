import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovrequestComponent } from './govrequest.component';

describe('GovrequestComponent', () => {
  let component: GovrequestComponent;
  let fixture: ComponentFixture<GovrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
