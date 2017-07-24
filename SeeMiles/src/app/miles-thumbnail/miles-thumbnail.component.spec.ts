import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilesThumbnailComponent } from './miles-thumbnail.component';

describe('MilesThumbnailComponent', () => {
  let component: MilesThumbnailComponent;
  let fixture: ComponentFixture<MilesThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilesThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilesThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
