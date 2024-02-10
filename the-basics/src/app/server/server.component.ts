import { Component } from "@angular/core";
@Component({
    selector:'app-server', //this must be unique. Any name.
    templateUrl:'./server.component.html' //external file
})

export class ServerComponent{
    serverID:number = 10;
    serverStatus:string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
};