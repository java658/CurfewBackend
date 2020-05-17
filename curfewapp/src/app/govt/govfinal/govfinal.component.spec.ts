import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovfinalComponent } from './govfinal.component';

describe('GovfinalComponent', () => {
  let component: GovfinalComponent;
  let fixture: ComponentFixture<GovfinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovfinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
