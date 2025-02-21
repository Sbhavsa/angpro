import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareproComponent } from './softwarepro.component';

describe('SoftwareproComponent', () => {
  let component: SoftwareproComponent;
  let fixture: ComponentFixture<SoftwareproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareproComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
