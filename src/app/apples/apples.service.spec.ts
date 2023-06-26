import { TestBed } from '@angular/core/testing';

import { ApplesService } from './apples.service';

describe('ApplesService', () => {
  let service: ApplesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
