import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVerifyComponent } from './show-verify.component';

describe('ShowVerifyComponent', () => {
  let component: ShowVerifyComponent;
  let fixture: ComponentFixture<ShowVerifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowVerifyComponent]
    });
    fixture = TestBed.createComponent(ShowVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
