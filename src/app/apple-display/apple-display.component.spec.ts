import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleDisplayComponent } from './apple-display.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppleDisplayComponent', () => {
  let component: AppleDisplayComponent;
  let fixture: ComponentFixture<AppleDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleDisplayComponent ],
      imports: [
        HttpClientModule
      ],
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
