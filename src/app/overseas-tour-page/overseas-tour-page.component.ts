import { Component, OnInit } from '@angular/core';
import { OverseasTourPageService } from './overseas-tour-page.service';

@Component({
  selector: 'app-overseas-tour-page',
  templateUrl: './overseas-tour-page.component.html',
  styleUrls: ['./overseas-tour-page.component.css']
})
export class OverseasTourPageComponent implements OnInit {

  /** エリア抽出用セレクトボックスリスト */
  areaList;

  /** 抽出エリアコード */
  filterArea;

  /** 検索インプット */
  searchKeyword = '';

  /** 海外ツアー一覧 */
  tourList;

  constructor(private httpService: OverseasTourPageService) { }

  ngOnInit() {
    this.httpService.getAreaData().subscribe(result => {
      this.areaList = result.data.area;
      this.getTour(this.areaList[0].code);
    });
  }

  /** ツアー情報取得 */
  getTour(code?) {
    this.httpService.getTourData(code).subscribe(result => {
      this.tourList = result.data.tour;
    });
  }

  /** エリア抽出セレクトボックス　変更イベント */
  onChangeAreaCond(event) {
    this.filterArea = event;
  }

  /** 検索ボタン 押下イベント */
  onClickSearchButton() {
    // todo 抽出条件をもとにツアー情報取得 
    this.httpService.getTourData().subscribe(result => {
      this.tourList = result.data;
    });
  }
}
