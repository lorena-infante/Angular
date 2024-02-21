import { Component } from "@angular/core";


@Component({
    selector: 'input-app',
    templateUrl: './input.component.html'
})

export class InputComponent {
    userName:string = '';
    isUserNameEmpty:boolean = true;

    updateUserName(event:Event){
        this.userName = (<HTMLInputElement>event.target).value;
    }

    toggleIsUserNameEmpty(){
        this.userName !== '' ? this.isUserNameEmpty = false : this.isUserNameEmpty = true;
    }

    onResetName(){
        this.userName = '';
        this.isUserNameEmpty = true;
    }

};