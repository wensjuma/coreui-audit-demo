import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownsComponent } from './towns.component';

describe('TownsComponent', () => {
  let component: TownsComponent;
  let fixture: ComponentFixture<TownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TownsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
