import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loading: boolean = false;
  isAlreadyAccount : boolean = false
  @ViewChild('loginRef') loginForm ! : NgForm
  @ViewChild('signUpRef') signUpForm ! : NgForm
  constructor(private _authService : AuthService,
              private _router : Router,
              private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
  }
  onLogin(){
    this.loading = true
    let Obj = this.loginForm.value
    this._authService.login(Obj)
      .subscribe({
        next : res =>{
          console.log(res);
          this._authService.setToken(res.token)
          this._authService.setToken(res.userRole)
          this._router.navigate(['home'])
          this._snackBar.snackBar(res.message)
          this.loading = false
        },
        error :err => {
          console.log(err);
          this._snackBar.snackBar(err.error.message)
          this.loading = false
        }
        
      })
  }

  onSignUp(){
    this.loading = true
    let Obj = this.signUpForm.value
    this._authService.signUp(Obj)
      .subscribe({
        next : res =>{
          console.log(res);
          this._authService.setToken(res.token)
          this._authService.setToken(res.userRole)
          this._router.navigate(['home'])
          this._snackBar.snackBar(res.message)
          this.loading = false
        },
        error : err => {
           console.log(err);
          this._snackBar.snackBar(err.error.message)
          this.loading = false
        }
        
      })
  }


}
