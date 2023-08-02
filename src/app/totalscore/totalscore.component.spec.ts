import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalscoreComponent } from './totalscore.component';

describe('TotalscoreComponent', () => {
  let component: TotalscoreComponent;
  let fixture: ComponentFixture<TotalscoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalscoreComponent]
    });
    fixture = TestBed.createComponent(TotalscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
