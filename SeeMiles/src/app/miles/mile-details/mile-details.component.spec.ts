import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MileDetailsComponent } from './mile-details.component';

describe('MileDetailsComponent', () => {
  let component: MileDetailsComponent;
  let fixture: ComponentFixture<MileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
