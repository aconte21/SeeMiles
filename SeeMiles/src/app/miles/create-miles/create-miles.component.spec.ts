import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMilesComponent } from './create-miles.component';

describe('CreateMilesComponent', () => {
  let component: CreateMilesComponent;
  let fixture: ComponentFixture<CreateMilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
