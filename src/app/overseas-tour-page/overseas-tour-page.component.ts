import { Component, OnInit } from '@angular/core';
import { OverseasTourPageService } from './overseas-tour-page.service';

@Component({
  selector: 'app-overseas-tour-page',
  templateUrl: './overseas-tour-page.component.html',
  styleUrls: ['./overseas-tour-page.component.css']
})
export class OverseasTourPageComponent implements OnInit {

  /** 選択したツアー情報(1件) */
  tourObj;

  /** 選択したエリアのツアー情報 */
  selectedData

  /** ブックマーク */
  bookMark

  /** モバイル　判定用 */
  isMobile = false;

  /** モバイル画面幅 */
  MOBILE_SCREEN_WIDTH = 768;

  /** エリア選択メニューの開閉 */
  isCollapsed = false;

  /** 3エリア全データ */
  areas = [
    { code: "BCH", name: "ビーチリゾート", data: null },
    // { code: "EUR", name: "ヨーロッパ", data: null },
    // { code: "DUS", name: "アメリカ", data: null },
    // { code: "BOOKMARK", name: "お気に入り", data: null },
  ];
  area = { code: "BCH", name: "ビーチリゾート", data: null };

  tourList: any;

  constructor(private httpService: OverseasTourPageService) { }

  ngOnInit() {
    this.getTour();
  }

  getTour() {
    this.httpService.getTourData(this.area.code).subscribe(result => {
      this.tourList = result.data;
      console.log(this.tourList);
    });
  }

  // /** 3エリアのツアー情報を一括情報 */
  // getTour() {
  //   this.selectedData = null;
  //   for (let i = 0; i< this.areas.length; i++) {
  //     let areaCode = this.areas[i].code;
  //     if (areaCode === "BOOKMARK") {
  //       continue;
  //     }
  //     this.httpService.getTourData(areaCode).subscribe(result => {
  //       this.setTour(result, i),
  //       error => alert("通信エラー¥n" + error)
  //     });
  //   }
  // }

  // /** 受信データ取得 */
  // setTour(result, i) {
  //   if (result.error) {
  //     alert("Web APIエラー¥n" + result.message);
  //     return;
  //   }
  //   this.areas[i].data = result;
  //   console.log(this.areas[i].data);
  // }
}
