import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowForgetPasswordComponent } from './show-forget-password.component';

describe('ShowForgetPasswordComponent', () => {
  let component: ShowForgetPasswordComponent;
  let fixture: ComponentFixture<ShowForgetPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowForgetPasswordComponent]
    });
    fixture = TestBed.createComponent(ShowForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
