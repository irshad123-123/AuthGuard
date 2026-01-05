import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId ! : string
  userObj ! : Iuser
  constructor(private _activatedRoute : ActivatedRoute,
              private _userService : UsersService,
              private _matDialog : MatDialog,
              private _router : Router
  ) { }

  ngOnInit(): void {
    this.getSingle()
  }
  getSingle(){
        this._activatedRoute.paramMap
      .subscribe(param =>{
        this.userId = param.get('id')!
        console.log(this.userId);
        if(this.userId){
          this._userService.fetchUser(this.userId)
            .subscribe({
              next : res =>{
                this.userObj = res
              },
              error : err =>{
                console.log(err); 
              }
            })
        }
      })
  }

  onRemove(){
    const matConfig = new MatDialogConfig()
    matConfig.disableClose = true;
    matConfig.width = '400px'
    matConfig.data = `Are you sure want to remove this profile with id ${this.userId}`
   let matRef = this._matDialog.open(GetConfirmComponent,matConfig)
  matRef.afterClosed()
    .subscribe({
      next : res =>{
       if(res){
         this._userService.removeUser(this.userObj)
          .subscribe({
            next : res =>{
              console.log(res); 
              this._router.navigate(['/users'])
            },
            error : err =>{
              console.log(err);
            }
          })
       }
      },
      error : err =>{
        console.log(err); 
      }
    })
  }
  onEdit(){
    this._router.navigate(['users/form',this.userId,'edit'])
  }

}
