import { TestBed, inject } from '@angular/core/testing';

import { MilesResolver } from './miles-resolver.service';

describe('MilesResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MilesResolver]
    });
  });

  it('should be created', inject([MilesResolver], (service: MilesResolver) => {
    expect(service).toBeTruthy();
  }));
});
