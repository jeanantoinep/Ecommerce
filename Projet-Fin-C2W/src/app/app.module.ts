import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './container/login/login.component';
import { NavBarComponent } from './container/nav-bar/nav-bar.component';
import { RegisterComponent } from './container/register/register.component';
import { ProductComponent } from './container/product/product.component';
import { ProductContainerComponent } from './container/product-container/product-container.component';
import { ProfileComponent } from './container/profile/profile.component';
import { JwtInterceptor } from './common/jwt.interceptor';
import { AddFormComponent } from './container/profile/add-form/add-form/add-form.component';
import { EditFormComponent } from './container/profile/edit-form/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    RegisterComponent,
    ProductComponent,
    ProductContainerComponent,
    ProfileComponent,
    AddFormComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
  {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
