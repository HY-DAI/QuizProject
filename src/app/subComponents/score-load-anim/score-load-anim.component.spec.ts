import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreLoadAnimComponent } from './score-load-anim.component';

describe('ScoreLoadAnimComponent', () => {
  let component: ScoreLoadAnimComponent;
  let fixture: ComponentFixture<ScoreLoadAnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreLoadAnimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreLoadAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
