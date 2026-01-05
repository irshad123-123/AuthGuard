import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iprod } from '../../models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prodArr : Array<Iprod> = []
  constructor(private _prodService : ProductsService,
              private _router : Router
  ) { }

  ngOnInit(): void {
    this.getAllProduct()
    this._router.navigate(['products','single',this.prodArr[0].id])
  }
  getAllProduct(){
    this._prodService.getAll()
      .subscribe({
        next : res =>{
          this.prodArr = res
        },
        error : err =>{
          console.log(err); 
        }
      })
  }

}
