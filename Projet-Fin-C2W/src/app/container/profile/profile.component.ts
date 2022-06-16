import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/Address';
import { User, UserRole } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth/auth.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {username: '', role: 0};
  address: Address[] =[]
  constructor(
    private _userService:UserService,
    private router: Router,
    private _authService: AuthService

  ) { }

  ngOnInit(): void {
    this._userService.getUserInfo().subscribe(data=>{
      this.user=data;
      if (data.role === UserRole.ROLE_ADMIN){
        this.user.role =1
      }
      else
      {
        this.user.role=0
      }
})
this._userService.getAddress().subscribe(data=>{
  this.address=data;
}

)}
goToAddingAddress(){
  this.router.navigateByUrl('/address')
}
  edit(addr:Address){
    this.router.navigate(['/editAddress'],{queryParams:{id:addr.id}})
  }

  delete(addr:Address, index:number){
    this._userService.DeleteAddress(addr.id).subscribe(data=>{
      this.address.splice(index,1)
    }
    )
  }

  editUsername(){
    this._userService.EditUsername(this.user).subscribe(()=>{
      this._authService.logout()
    }
    )
  }
}
