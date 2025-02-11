import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelsecompoComponent } from './ifelsecompo.component';

describe('IfelsecompoComponent', () => {
  let component: IfelsecompoComponent;
  let fixture: ComponentFixture<IfelsecompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfelsecompoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfelsecompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
