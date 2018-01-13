import { TestBed, inject } from '@angular/core/testing';

import { AllMethodsService } from './all-methods.service';

describe('AllMethodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllMethodsService]
    });
  });

  it('should be created', inject([AllMethodsService], (service: AllMethodsService) => {
    expect(service).toBeTruthy();
  }));
});
