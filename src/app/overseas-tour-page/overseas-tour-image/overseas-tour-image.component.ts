import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overseas-tour-image',
  templateUrl: './overseas-tour-image.component.html',
})
export class OverseasTourImageComponent implements OnInit {
  
  /** ツアーデータ */
  @Input() tourData;

  constructor() { }

  ngOnInit() {
    console.log(this.tourData);
  }

  get getImage(): string {
    if (this.tourData.img[2]) {
        return this.tourData.img[2].l
      }
      if (this.tourData.img[1]) {
        return this.tourData.img[1].l
      }
      return this.tourData.img[0].l
    }
}
