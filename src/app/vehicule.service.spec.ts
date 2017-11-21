import { TestBed, inject } from '@angular/core/testing';

import { VehiculeService } from './vehicule.service';

describe('VehiculeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculeService]
    });
  });

  it('should be created', inject([VehiculeService], (service: VehiculeService) => {
    expect(service).toBeTruthy();
  }));
});
