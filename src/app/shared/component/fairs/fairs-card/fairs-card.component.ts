import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ifair } from 'src/app/shared/models/fairs';
import { FairsService } from 'src/app/shared/services/fairs.service';

@Component({
  selector: 'app-fairs-card',
  templateUrl: './fairs-card.component.html',
  styleUrls: ['./fairs-card.component.scss']
})
export class FairsCardComponent implements OnInit {
  constructor(private _avtiveRoute : ActivatedRoute,
              private _fairService : FairsService
  ) { }
  fairObj ! : Ifair
  ngOnInit(): void {
   this.showDetails()
  }
  showDetails(){
     this._avtiveRoute.paramMap
     .subscribe(param=>{
      let id = param.get('fairId')!
      console.log(id);
        this._fairService.getSingle(id)
        .subscribe({
          next : res =>{
           if(res){
             this.fairObj = res
           }
          },
          error : err =>{
            console.log(err);
            
          }
        })
    })
  }

}
