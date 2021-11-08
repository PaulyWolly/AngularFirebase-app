import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videoId = "KGHY9jJQSiE";

  videoId1 = "KGHY9jJQSiE";
  videoId2 = "rNgqbV3Ht8I";

  constructor() { }

  ngOnInit(): void {
  }

  playVideo1() {
    this.videoId = this.videoId1;
  }
  playVideo2() {
    this.videoId = this.videoId2;
  }

}
