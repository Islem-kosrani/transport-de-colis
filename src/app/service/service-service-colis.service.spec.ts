import { TestBed } from '@angular/core/testing';

import { ServiceServiceColisService } from './service-service-colis.service';

describe('ServiceServiceColisService', () => {
  let service: ServiceServiceColisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceServiceColisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
