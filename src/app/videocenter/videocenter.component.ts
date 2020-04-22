import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Video} from './../video';
@Component({
  selector: 'app-videocenter',
  templateUrl: './videocenter.component.html',
  styleUrls: ['./videocenter.component.css'],
  inputs:['video']
})
export class VideocenterComponent implements OnInit {
  videos : Video[]=[
    {"_id":"1","title":"Title 1","url":"url 1", "description": "98798"},
    {"_id":"2","title":"Title 2","url":"url 2", "description": "768778"},
    {"_id":"3","title":"Title 3","url":"url 65", "description": "767689"},
    {"_id":"4","title":"Title 4","url":"url 4", "description": "98907"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
