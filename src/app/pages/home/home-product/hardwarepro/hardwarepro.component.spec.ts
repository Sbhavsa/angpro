import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareproComponent } from './hardwarepro.component';

describe('HardwareproComponent', () => {
  let component: HardwareproComponent;
  let fixture: ComponentFixture<HardwareproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardwareproComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
