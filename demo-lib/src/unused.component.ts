
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'unused-component',
    template: `<h1 (click)="info(1,2)">I'm not used, {{result}}</h1>`
})

export class UnusedComponent implements OnInit {
    constructor() { }

    result:number;

    info(a,b) {
        this.result = a + b;
    }

    ngOnInit() { }
}