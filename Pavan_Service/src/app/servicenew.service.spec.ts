import { TestBed } from '@angular/core/testing';

import { ServicenewService } from './servicenew.service';

describe('ServicenewService', () => {
  let service: ServicenewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicenewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
