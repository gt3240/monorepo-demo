import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IehpLogoComponent } from './iehp-logo.component';

describe('IehpLogoComponent', () => {
  let component: IehpLogoComponent;
  let fixture: ComponentFixture<IehpLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IehpLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IehpLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
