import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
