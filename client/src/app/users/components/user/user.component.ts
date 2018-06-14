import { Component, Input } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
  selector: 'client-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: User;

  constructor() { }

}
