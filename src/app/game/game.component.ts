import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    @Input() user: User;

    @Output() evenement: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
        setInterval(() => {
            this.evenement.emit('salut!');
        }, 500);
    }

}
