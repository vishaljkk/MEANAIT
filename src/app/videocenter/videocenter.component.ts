import { Component, OnInit, Input } from '@angular/core';
import {Video} from './../video';

@Component({
  selector: 'app-videocenter',
  templateUrl: './videocenter.component.html',
  styleUrls: ['./videocenter.component.css'],
  inputs:['videos']
})
export class VideocenterComponent implements OnInit {


  selectedVideo: null;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectVideo(video:any){
    this.selectedVideo=video;
    console.log(this.selectedVideo);
  }
}
