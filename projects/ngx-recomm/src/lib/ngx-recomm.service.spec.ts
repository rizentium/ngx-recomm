import { TestBed } from '@angular/core/testing';

import { NgxRecommService } from './ngx-recomm.service';
import { NgxRecommServiceCase as cases } from './ngx-recomm.service.case';

describe('NgxRecommService', () => {
  let service: NgxRecommService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRecommService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getRecommendation() Case 1 PASSED!', () => {
    expect(service.getRecommendation(cases.CASE_1.case, cases.CASE_1.basedOn, cases.CASE_1.input)).toEqual(cases.CASE_1.result);
  });

  it('getRecommendation() Case 2 PASSED!', () => {
    expect(service.getRecommendation(cases.CASE_2.case, cases.CASE_2.basedOn, cases.CASE_2.input)).toEqual(cases.CASE_2.result);
  });
});
