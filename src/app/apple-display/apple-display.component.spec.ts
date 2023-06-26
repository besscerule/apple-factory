import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleDisplayComponent } from './apple-display.component';

describe('AppleDisplayComponent', () => {
  let component: AppleDisplayComponent;
  let fixture: ComponentFixture<AppleDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
