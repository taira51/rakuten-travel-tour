import { Component, Input, OnInit } from '@angular/core';

/** サーチャージ　タイプ */
const Surcharge = [
  'サーチャージ無し',
  'サーチャージ込み',
  'サーチャージ別'
]

@Component({
  selector: 'app-overseas-tour-bean',
  templateUrl: './overseas-tour-bean.component.html',
  styleUrls: ['./overseas-tour-bean.component.css']
})
export class OverseasTourBeanComponent implements OnInit {
  
  /** ツアーデータ */
  @Input() tourData;

  constructor() { }

  ngOnInit() {
  }

  /** ツアー画像を取得 */
  get getImage(): string {
    if (this.tourData.img[2]) {
        return this.tourData.img[2].m
    }
    if (this.tourData.img[1]) {
      return this.tourData.img[1].m
    }
    return this.tourData.img[0].m
  }

  get getUrls(): string {
    return this.tourData.urls.pc;
  }

  /** サーチャージのタイプを取得 */
  get getSurcharge(): string{
    return Surcharge[this.tourData.price.oil_surcharge.include];
  }

}
