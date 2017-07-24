import { TestBed, inject } from '@angular/core/testing';

import { MilesService } from './miles.service';

describe('MilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MilesService]
    });
  });

  it('should be created', inject([MilesService], (service: MilesService) => {
    expect(service).toBeTruthy();
  }));
});
