import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iprod } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {
  prodObj !  : Iprod
  constructor(private _activatedRouter : ActivatedRoute,
              private _prodService : ProductsService
  ) { }

  ngOnInit(): void {
    this._activatedRouter.paramMap
      .subscribe(param =>{
        let id = param.get('prodId')!
        // console.log(id);
        
        if(id){
          this._prodService.getSingle(id)
            .subscribe({
              next : res =>{
                this.prodObj = res
                // console.log(res);
                
              },
              error : err =>{
                console.log(err);
                
              }
            })
        }
      })
  }

}
