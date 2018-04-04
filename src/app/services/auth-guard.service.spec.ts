import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CookieModule } from 'ngx-cookie';


describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CookieModule.forRoot(), RouterTestingModule],
      providers: [AuthGuardService, AuthService]
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
