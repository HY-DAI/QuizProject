import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilpCardComponent } from './filp-card.component';

describe('FilpCardComponent', () => {
  let component: FilpCardComponent;
  let fixture: ComponentFixture<FilpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilpCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
