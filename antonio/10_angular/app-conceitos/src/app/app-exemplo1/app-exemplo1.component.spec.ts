import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExemplo1Component } from './app-exemplo1.component';

describe('AppExemplo1Component', () => {
  let component: AppExemplo1Component;
  let fixture: ComponentFixture<AppExemplo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppExemplo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppExemplo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
