import { Component } from "@angular/core";
@Component({
    selector:'app-server', //this must be unique. Any name.
    templateUrl:'./server.component.html', //external file
    styles:[`
    p {
        &.online {
            font-size: 2rem;
            font-weight: 700;
            color: #BEEE62
        }
        
        &.offline {
            font-size: 2rem;
            font-weight: 700;
            color: #483C46
        }
    }
    `]
})

export class ServerComponent{
    
    serverID:number = 10;
    serverStatus:string = 'offline';
    color:string = '';
    
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus === 'online' ? '#70AE6E' : '#F4743B';
    }
};