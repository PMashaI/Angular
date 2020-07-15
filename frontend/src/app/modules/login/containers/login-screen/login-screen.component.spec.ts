import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginScreenContainerСomponent } from './login-screen.component';

describe('LoginScreenContainerComponent', () => {
  let component: LoginScreenContainerСomponent;
  let fixture: ComponentFixture<LoginScreenContainerСomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginScreenContainerСomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginScreenContainerСomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
