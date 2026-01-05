import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  isEditMode : boolean = false
  id ! : string
  @ViewChild('formRef') formRef ! : NgForm
  constructor(private _uuid : UuidService,
              private _userService : UsersService,
              private _snackBar : SnackBarService,
              private _router : Router,
              private _activateRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this._activateRoute.paramMap
      .subscribe(param =>{
        let id = param.get('id')!
        console.log(id);
        this.id = id
        if(id){
          this.isEditMode = true
          this._userService.fetchUser(id)
            .subscribe({
              next : res =>{
                setTimeout(()=>{
                  this.formRef.form.patchValue(res)
                },0)
              }
            })
        }
      })
  }
  onAdd(){
    if(this.formRef.valid){
      let obj = {
      ...this.formRef.value,
      id : this._uuid.Uuid()
    }
    this._userService.addUser(obj)
      .subscribe({
        next :res =>{
          this._snackBar.snackBar('The new employee added successfully!!!')
          this._router.navigate(['users'])
        }
      })
    }
  }
  onUpdate(){
    let Update_Obj={
      ...this.formRef.value,
      id : this.id
    }
    this._userService.updateUser(Update_Obj)
      .subscribe({
        next : res =>{
          this._snackBar.snackBar('The detail is updated successfully!!!')
          this.isEditMode = false
          this._router.navigate(['/users'])
        }
      })
  }

}
