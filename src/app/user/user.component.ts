import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  userSelected: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetch()
  }

  fetch(){
    this.userService.fetchAll().subscribe(users=>this.users = users);
  }

    lireMessage(msg: string) {
        console.log('message recu');
      console.log(msg)
    }
}
