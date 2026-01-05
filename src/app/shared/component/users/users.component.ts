import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iuser } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userArr : Array<Iuser> = []
  constructor(private _userService : UsersService,
              private _router : Router
  ) { }

  ngOnInit(): void {
    this.getAll()
     this._router.navigate(['users',this.userArr[0].id])
  }
  getAll(){
    this._userService.getAllUser()
      .subscribe({
        next : res =>{
          this.userArr = res
        }, 
        error : err =>{
          console.log(err);
          
        }
      })
  }

}
