import { TestBed } from '@angular/core/testing';

import { JwtInterceptorBInterceptor } from './jwt-interceptor-b.interceptor';

describe('JwtInterceptorBInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtInterceptorBInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtInterceptorBInterceptor = TestBed.inject(JwtInterceptorBInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
