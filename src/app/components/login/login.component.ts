import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private redirectTo: string = 'list';

  public hasError: boolean = false;

  public credentials: object = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.isLoggedIn)
      this.router.navigateByUrl(this.redirectTo);
  }

  attemptLogin() {
    this.authService.attemptLogin(this.credentials).then(() => {
      this.router.navigateByUrl(this.redirectTo);
    }).catch(() => {
      this.hasError = true;
    });
  }

}
