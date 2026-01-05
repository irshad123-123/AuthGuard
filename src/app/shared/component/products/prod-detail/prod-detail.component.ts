import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iprod } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.scss']
})
export class ProdDetailComponent implements OnInit {
  @Input() prodObj ! : Iprod
  constructor(private _router : Router,
              private _activatedRouter : ActivatedRoute,
              private _prodService : ProductsService
  ) { }

  ngOnInit(): void {
    // console.log(this.prodObj);
  }
  onChange(){
    this._activatedRouter.paramMap
      .subscribe(param=>{
        let id = param.get('id')
        if(id){
          this._prodService.getSingle(id)
            .subscribe({
              next : res =>{
                
              }
            })
        }
      })
  }
}
