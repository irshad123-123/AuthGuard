import { Component, OnInit } from '@angular/core';
import { FairsService } from '../../services/fairs.service';
import { IfStmt } from '@angular/compiler';
import { Ifair } from '../../models/fairs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {
  fairArr : Array<Ifair> = []
  constructor(private _fairService : FairsService,
              private _activatedRoute : ActivatedRoute,
              private _router : Router

  ) { }

  ngOnInit(): void {
    this.getAllFairs()
    this._router.navigate(['fairs',this.fairArr[0].fairId])
  }
  getAllFairs(){
    this._fairService.getAll()
      .subscribe({
        next : res =>{
          this.fairArr = res
          
        },
        error : err =>{
          console.log(err);
          
        }
      })
  }

}
