import { Injectable } from '@angular/core';
import { Iprod } from '../models/products';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  prodArr :Array<Iprod> = [
  {
    id:'p101',
    name:'Samsung Galaxy S23',
    imgUrl:'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=600&q=80',
    details:'8GB RAM, 128GB Storage',
    rating:4,
    price:74999,
    discount:15,
    stock:12,
    status:'Available'
  },
  {
    id:'p102',
    name:'Apple iPhone 14',
    imgUrl:'https://storage.googleapis.com/alpine-inkwell-325917.appspot.com/devices/iphone-14-header.png',
    details:'A15 Bionic Chip',
    rating:5,
    price:69999,
    discount:10,
    stock:0,
    status:'Out of Stock'
  },
  {
    id:'p103',
    name:'OnePlus Nord CE 3',
    imgUrl:'https://oasis.opstatics.com/content/dam/oasis/page/2023/global/product/larry/specs/product-black.png',
    details:'AMOLED Display',
    rating:3,
    price:26999,
    discount:20,
    stock:25,
    status:'Available'
  },
  {
    id:'p104',
    name:'Samsung Galaxy S22',
    imgUrl:'https://samsungmobilepress.com/file/1C69605B491DFADD70995BCBF81AD75536A41C03DD57049A03AB21676263ECFDE859034AE66B2AAE472E2E25C3E273DF2D9A74D715837FF870334E0C732BEC5FF74CA486B1880BC6DF483EF69A4F9B15A3B6350264049A1E02485017868810580EF69BC363683A4ADDDFC42FEA75B51F765BAAACF2094677A34E29A49321DAD4D30663247C6FB9183751E37FA25265C7213965B541588A1A8A13571B9EF7706B',
    details:'Flagship Performance',
    rating:2,
    price:64999,
    discount:18,
    stock:8,
    status:'Available'
  },
  {
    id:'p105',
    name:'Apple iPhone 13',
    imgUrl:'https://linkupbah.com/cdn/shop/files/2_fc8a178a-1442-4b18-934e-6328b3158a0d_750x.png?v=1738268077',
    details:'A15 Chip, Dual Camera',
    rating:4,
    price:59999,
    discount:12,
    stock:0,
    status:'Out of Stock'
  },

  {
    id:'p106',
    name:'Samsung Galaxy A54',
    imgUrl:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTeQ4poCmet7kPQxI8Xv4CHipT7BMQR2dAiR5bdy74GAK2st3ovyJgk5a5mWa8xi52b3QNj0QSgEmWWjf36C_LcbTN1Lhvl6g',
    details:'Super AMOLED, 5G',
    rating:1,
    price:34999,
    discount:22,
    stock:20,
    status:'Available'
  },
  {
    id:'p107',
    name:'Google Pixel 7',
    imgUrl:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-kABQFU9iWvFiK_SH8R-_4mBEqJEHVF4XShrU9vqd4EEROc3lFzJKcQBXcAvD5d9CZW0P9jHbUJNY_10UEfPeP4LGOFmh3nVjyjrUPHmZZQo6RLz43azkrVCdNurArBfOvqg70M11&usqp=CAc',
    details:'Tensor Chip, Pure Android',
    rating:4,
    price:59999,
    discount:15,
    stock:0,
    status:'Out of Stock'
  },
  {
    id:'p108',
    name:'Samsung Galaxy M34',
    imgUrl:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzBwSluyxED-9nMgVOvXh9ee8TsGNIxYjvnjww-tSaRFTGfLOd1rqDRh9Flb6Rxlm8aOaiFQ7Nt3-ff9f8E4QUCVwfBW1Hml4Q7v3VcrpH2Pg0TCmbJmqm4DQPdJDwnX1tcNjZhLc&usqp=CAc',
    details:'6000mAh Battery',
    rating:3,
    price:18999,
    discount:30,
    stock:30,
    status:'Available'
  },
  {
    id:'p109',
    name:'Apple iPhone 12',
    imgUrl:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR4vzYC6zMU2uLpRabFKGIp7GrOqmTU8lXUXdWtgRObgVrd4xIpVY_VsoK6kJlYSsa9mHbJtj4K3eQcm0PNHMaor23pRq384ePWe7DOTL7D&usqp=CAc',
    details:'OLED Display',
    rating:4,
    price:54999,
    discount:20,
    stock:0,
    status:'Out of Stock'
  },
  {
    id:'p110',
    name:'OnePlus 11R',
    imgUrl:'https://oasis.opstatics.com/content/dam/oasis/page/2023/in/oneplus-10t/specs/10r-black.png',
    details:'Snapdragon Performance',
    rating:2,
    price:39999,
    discount:18,
    stock:14,
    status:'Available'
  }]

getAll(): Observable<Iprod[]>{
  return of(this.prodArr)
}
addProd(obj : Iprod):Observable<Iprod>{
  this.prodArr.unshift(obj)
  return of(obj)
}
getSingle(id : string):Observable<Iprod>{
  let findPosi = this.prodArr.find(f=>f.id === id) as Iprod
  return of(findPosi)
}
updateProd(obj : Iprod):Observable<Iprod>{
  let getIndex = this.prodArr.findIndex(f=>f.id === obj.id)
  this.prodArr[getIndex] = obj
  return of(obj)
}
removeProd(id : string){
   this.prodArr = this.prodArr.filter(f=>f.id !== id)
   return of([this.prodArr])
}

}
