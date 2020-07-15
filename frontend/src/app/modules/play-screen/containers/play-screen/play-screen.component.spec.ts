import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayScreenContainerComponent } from './play-screen.component';

describe('PlayScreenContainerComponent', () => {
  let component: PlayScreenContainerComponent;
  let fixture: ComponentFixture<PlayScreenContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayScreenContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayScreenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
