import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() userObj ! : Iuser
  constructor() { }

  ngOnInit(): void {
  }

}
