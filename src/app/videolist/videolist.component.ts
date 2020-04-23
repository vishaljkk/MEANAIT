import { Component, OnInit, EventEmitter } from '@angular/core';
import {Video} from './../video';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
  inputs:['videos'],
  outputs: ['SelectVideo']
})
export class VideolistComponent implements OnInit {
  public SelectVideo = new EventEmitter();
  videos : Video[]=[
    {"_id":"1","title":"Title 1","url":"https://www.w3schools.com/", "description": "98798"},
    {"_id":"2","title":"Title 2","url":"https://www.youtube.com/watch?v=5U9uP6riAZM&list=RD5U9uP6riAZM&start_radio=1", "description": "768778"},
    {"_id":"3","title":"Title 3","url":"https://www.youtube.com/watch?v=kqmsZdE962Q&list=RDkqmsZdE962Q&start_radio=1", "description": "767689"},
    {"_id":"4","title":"Title 4","url":"https://www.youtube.com/watch?v=LWh5u9c6iZQ", "description": "98907"},
  ];
  constructor() { }
  ngOnInit(): void {
  }
  onSelect(vid: Video){
    console.log("the video is been emiited");
    this.SelectVideo.emit(vid);
  }
}
