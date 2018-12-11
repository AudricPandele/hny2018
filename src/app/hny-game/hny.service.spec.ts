import { TestBed } from '@angular/core/testing';

import { HnyService } from './hny.service';

describe('HnyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HnyService = TestBed.get(HnyService);
    expect(service).toBeTruthy();
  });
});
