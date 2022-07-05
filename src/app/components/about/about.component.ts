import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imageSrc = '../../assets/morbAbout.png';
  tomatoMeter = '../../assets/tmeter.png';
  audienceMeter = '../../assets/afresh.png';
  tmeter = 203;
  ascore = 142;
  msg = '';
  counter = 352922847246203;

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(){
    this.msg=`It's Morbin' Time`;
    return this.msg;
  }

  increment() {
    this.counter += Math.floor(Math.random() * 100) + 1;
  }

  incrementSlowly() {
    this.tmeter += Math.floor(Math.random() * 10) + 1;
    this.ascore += Math.floor(Math.random() * 10) + 1;
  }

}
