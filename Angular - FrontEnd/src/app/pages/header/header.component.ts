import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth/auth.service';
import { Component, inject, Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
    ) { }

    mostraHeader = true

  ngOnInit(): void {

  }

  logout(){
    localStorage.clear()
    this.router.navigate(['login'])
  }

}