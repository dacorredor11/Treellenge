import { TestBed } from '@angular/core/testing';

import { Firebase.Service.TsService } from './firebase.service.ts.service';

describe('Firebase.Service.TsService', () => {
  let service: Firebase.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Firebase.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
