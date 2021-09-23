import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExemplo3Component } from './app-exemplo3.component';

describe('AppExemplo3Component', () => {
  let component: AppExemplo3Component;
  let fixture: ComponentFixture<AppExemplo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppExemplo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppExemplo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
