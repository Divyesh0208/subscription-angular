import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  isClient = false;
  isAdmin = false;

  constructor(){}

  ngOnInit(): void {
    this.adminCheck();
    this.clientCheck();
  }
  
  adminCheck(){
    this.isAdmin = localStorage.getItem('admin') === 'true';
  }
  
  clientCheck(){
    this.isClient = JSON.parse(localStorage.getItem('client') || '').client;
  }

}
