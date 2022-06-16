import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from 'src/app/model/Address';
import { User } from 'src/app/model/User';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.API_URL;


  constructor(

    private http:HttpClient
  ) { }

  getUserInfo(){
    return this.http.get<User>(`${this.API_URL}/me`)
  }
  getAddress(){
    return this.http.get<Address[]>(`${this.API_URL}/address`)
  }
  addAddress(addr:Address){
    return this.http.post<Address>(`${this.API_URL}/address`,addr)
  }
  getAddressById(id:number){
    return this.http.get<Address>(`${this.API_URL}/address/${id}`)
  }

  EditAddress(addr:Address){
    return this.http.put<Address>(`${this.API_URL}/address/${addr.id}`,addr)
  }

  DeleteAddress(id:number){
    return this.http.delete(`${this.API_URL}/address/${id}`)
  }

  EditUsername(user:User){
    return this.http.put<User>(`${this.API_URL}/user`, user)
  }
}
