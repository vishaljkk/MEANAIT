import { Component, OnInit, Input } from '@angular/core';
import {Video} from './../video';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
})
export class VideoDetailComponent implements OnInit {
  editTitle: boolean = false;
  @Input() video: Video = {
    _id : "1",
    title: "Title 1",
    url:"https://www.youtube.com/watch?v=NTEvs30m9D8&list=PLC3y8-rFHvwj200LLotCYum_9wmGeTJx9&index=19",
    description:"98798"
  };
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.editTitle = false;
  }
  onTitleClick(){
    this.editTitle = true;
  }
}
