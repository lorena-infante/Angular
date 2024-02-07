import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `<p class="h1 text-success">servers works!</p>
  <app-server></app-server>
  <app-server></app-server>
  <lore-app></lore-app>`,
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

}
