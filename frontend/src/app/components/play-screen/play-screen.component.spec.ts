import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayScreenComponent } from './play-screen.component';

describe('PlayScreenComponent', () => {
  let component: PlayScreenComponent;
  let fixture: ComponentFixture<PlayScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
