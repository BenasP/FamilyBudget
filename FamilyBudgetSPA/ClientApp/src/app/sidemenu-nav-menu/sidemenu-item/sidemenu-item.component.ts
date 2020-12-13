import {Component, Input} from '@angular/core';

@Component({
  selector: 'sidemenu-item',
  templateUrl: './sidemenu-item.component.html',
  styleUrls: ['./sidemenu-item.component.css']
})
export class SidemenuItemComponent {
  @Input() state: string;
  @Input() name: string;
}
