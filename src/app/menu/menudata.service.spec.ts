import { TestBed, inject } from '@angular/core/testing';

import { MenudataService } from './menudata.service';

describe('MenudataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenudataService]
    });
  });

  it('should be created', inject([MenudataService], (service: MenudataService) => {
    expect(service).toBeTruthy();
  }));
});
