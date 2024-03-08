import { Component } from '@angular/core';

@Component({
    selector:'app-toggler',
    templateUrl:'./toggler.component.html',
    styleUrls:['./toggler.component.css']

})

export class TogglerComponent {
    toggledText:string = '';
    btnClicked:boolean = false;
    clicksArr:number[] = [];
    counter:number = 1;

    toggleText(){
        this.btnClicked = !this.btnClicked;
        this.toggledText ='\'Cause when I am weak, then I am strong 💪🏻';
        this.clicksArr.push(this.counter++);
        return this.counter;
    }

}