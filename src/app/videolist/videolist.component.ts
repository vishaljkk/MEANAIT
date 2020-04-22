import { Component, OnInit, EventEmitter} from '@angular/core';
import {Video} from './../video';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
  inputs:["videos"]
})
export class VideolistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
