import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginScreenContaineromponent } from './login-screen.component';

describe('LoginScreenContainerComponent', () => {
  let component: LoginScreenContaineromponent;
  let fixture: ComponentFixture<LoginScreenContaineromponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginScreenContaineromponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginScreenContaineromponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
