import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  clientName!: string;
  @Output() toggleSideBar: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router){}

  ngOnInit(): void {
      this.clientCheck();
      // this.adminCheck();
  }

  clientCheck(){
    if(localStorage.getItem('client')){
      this.clientName = JSON.parse(localStorage.getItem('client') || '').clientName;

    }
  }

  toggleSideBarFun(){
    this.toggleSideBar.emit();
  }

  logout(){
    this.router.navigate(['']);
    localStorage.clear();
  }
}
