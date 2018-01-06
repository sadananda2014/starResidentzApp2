import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-starter-header',
  templateUrl: './starter-header.component.html',
  styleUrls: ['./starter-header.component.css']
})
export class StarterHeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
  authCheck: boolean;
  ngOnInit() {
    this.authCheck = this.authService.isAuthenticated(); 
    console.log(this.authCheck);
  }

}
