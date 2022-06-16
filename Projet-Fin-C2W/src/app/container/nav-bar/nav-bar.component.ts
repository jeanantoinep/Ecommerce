import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLog:boolean =false;
  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this._authService.user.subscribe(data=>{
      this.isLog = data ? true : false;
    }
    )
  }

  logout(){
    this._authService.logout();
    this.router.navigateByUrl('/login');
  }

}
