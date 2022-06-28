import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorlogeMenuComponent } from './horloge-menu.component';

describe('HorlogeMenuComponent', () => {
  let component: HorlogeMenuComponent;
  let fixture: ComponentFixture<HorlogeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorlogeMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorlogeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
