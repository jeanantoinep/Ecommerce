import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/model/Address';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  addr: Address= {id: 0, road: '', city: '', country: '', postalCode: ''};
  constructor(
    private _userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>
      {this._userService.getAddressById(params['id']).subscribe(data=>{
        this.addr =data
      }
      )
  }
  )}
  Edit(){
  this._userService.EditAddress(this.addr).subscribe(data=>{
  this.router.navigate(['/profile'])
    })

}
}
