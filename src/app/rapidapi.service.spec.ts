import { TestBed } from '@angular/core/testing';
import { RapidApiService } from './rapidapi.service';

describe('RapidapiService', () => {
  let service: RapidApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapidApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
