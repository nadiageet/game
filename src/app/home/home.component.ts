import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    isReady = false;
    numbers = [1, 5, 8, 7, 4, 5, 8];
    name = 'toto';
    constructor() {
    }

    ngOnInit() {
    }

    onClick() {
        this.isReady = !this.isReady;
    }
}
