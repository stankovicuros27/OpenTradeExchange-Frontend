import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTradingComponent } from './user-trading.component';

describe('UserTradingComponent', () => {
  let component: UserTradingComponent;
  let fixture: ComponentFixture<UserTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTradingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
