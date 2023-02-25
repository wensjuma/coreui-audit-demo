import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountiesComponent } from './counties.component';

describe('CountiesComponent', () => {
  let component: CountiesComponent;
  let fixture: ComponentFixture<CountiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
