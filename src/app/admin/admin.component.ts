import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink,ActivatedRoute,NavigationEnd } from '@angular/router';

declare var $: any;


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
 
  constructor(private router: Router){}
  ngOnInit(): void {

  
}}
