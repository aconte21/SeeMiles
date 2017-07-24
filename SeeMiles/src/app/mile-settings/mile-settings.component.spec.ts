import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MileSettingsComponent } from './mile-settings.component';

describe('MileSettingsComponent', () => {
  let component: MileSettingsComponent;
  let fixture: ComponentFixture<MileSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MileSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
