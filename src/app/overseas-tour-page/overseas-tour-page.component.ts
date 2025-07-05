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

  /** 検索ヒット数 */
  resultsAvailable;

  constructor(private httpService: OverseasTourPageService) { }

  ngOnInit() {
    this.httpService.getAreaData().subscribe(result => {
      this.areaList = result.data.area;
      this.filterArea = this.areaList[0].code;
      this.getTour();
    });
  }

  /** ツアー情報取得 */
  getTour() {
    this.httpService.getTourData(this.filterArea, this.searchKeyword).subscribe(result => {
      this.resultsAvailable = result.data.results_available;
      this.tourList = result.data.tour;
    });
  }

  /** エリア抽出セレクトボックス　変更イベント */
  onChangeAreaCond(event) {
    this.filterArea = event;
  }

  /** 検索ボタン 押下イベント */
  onClickSearchButton() {
    this.getTour();
  }
}
