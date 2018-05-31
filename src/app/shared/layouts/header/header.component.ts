import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public goToOpinie () {
    // window.location.href = 'https://ekassa.pl?igor_test=true';
  }
  public goToFirstStep () {}
  public showLoginModal () {}
  public goToPersonalData () {}
  public changePassword () {}
  public goToFooter () {}
  public goToFaq () {}
  public logout () {}
  public toggleSidebar () {}

}
