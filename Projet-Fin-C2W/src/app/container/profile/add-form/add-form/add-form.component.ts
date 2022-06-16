import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/Address';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  addr:Address = {id: 0, road: '', city: '', country: '', postalCode: ''};
  constructor(
    private _userService:UserService,
    private _router:Router
  ) { }


  ngOnInit(): void {
  }
  Add(){
    this._userService.addAddress(this.addr).subscribe(data=>{
      this._router.navigateByUrl('/profile')
    }
    )
  }

}
