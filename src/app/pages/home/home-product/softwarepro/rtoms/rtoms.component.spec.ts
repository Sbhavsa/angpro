import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtomsComponent } from './rtoms.component';

describe('RtomsComponent', () => {
  let component: RtomsComponent;
  let fixture: ComponentFixture<RtomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
