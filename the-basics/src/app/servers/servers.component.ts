import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //external file styles
  styleUrls: ['./servers.component.css']
  // inline styles
/*   styles: [`p {
    color:darkorange;
    font-size: large;
    font-weight: 700;
}`] */
})
export class ServersComponent {
  allowNewServer:boolean = false;
  serverCreationStatus:string = 'No server was chosen!';
  serverName:string= '';

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreationStatus = `Server ${this.serverName} created!`;
  }
  onUpdatingServerName(event:Event){
    this.serverName =(<HTMLInputElement>event.target).value;
    
  }
}
