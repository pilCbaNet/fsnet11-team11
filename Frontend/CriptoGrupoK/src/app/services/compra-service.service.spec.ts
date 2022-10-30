import { TestBed } from '@angular/core/testing';

import { CompraServiceService } from './compra-service.service';

describe('CompraServiceService', () => {
  let service: CompraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
