import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.username, this.password).subscribe(data => {
      localStorage.setItem('Token',data.toString())
      this.authService.userSubject.next(data.toString())
      this.router.navigateByUrl('/product')
    })



  }
}
