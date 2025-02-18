import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeclientterComponent } from './homeclientter.component';

describe('HomeclientterComponent', () => {
  let component: HomeclientterComponent;
  let fixture: ComponentFixture<HomeclientterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeclientterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeclientterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
