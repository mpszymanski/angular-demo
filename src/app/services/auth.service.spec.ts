import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';
import { CookieModule } from 'ngx-cookie';

describe('AuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CookieModule.forRoot(), RouterTestingModule],
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
