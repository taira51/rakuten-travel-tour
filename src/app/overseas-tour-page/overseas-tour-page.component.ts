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

  tourList: any;

  constructor(private httpService: OverseasTourPageService) { }

  ngOnInit() {
    this.getSpot();
  }

  getSpot() {
    this.httpService.getSpotData().subscribe(result => {
      this.tourList = result.data;
    });
  }
}
