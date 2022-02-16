import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentModal } from './login.component';

describe('LoginComponentModal', () => {
  let component: LoginComponentModal;
  let fixture: ComponentFixture<LoginComponentModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponentModal ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponentModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
