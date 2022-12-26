import { provideCloudflareLoader } from '@angular/common';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, interval, observable, Observable, Observer } from 'rxjs';
import { map,filter, mapTo } from 'rxjs/operators';
import { Book } from './common/book';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent  {
  
  

}