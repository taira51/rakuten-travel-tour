import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { API_KEY } from '../common/api/api-key';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';

const abRoadApi = {
  url: 'https://webservice.recruit.co.jp/ab-road/spot/v1',
  key: API_KEY.abRoad,
  defaultSize: '30',
  sortRanking: '5',
  format: 'jsonp',
  callBack: 'JSONP_CALLBACK'
}

@Injectable()
export class OverseasTourPageService {

  constructor(private jsonp: Jsonp) { }

  /** 観光地データ */
  getSpotData(): Observable<any> {
    const option = this.setParam();
    return this.reqData(option);
  }

  /** API 通信設定 */
  setParam(): RequestOptions {
    let param = new URLSearchParams();
    param.set('key', abRoadApi.key);
    param.set('order', abRoadApi.sortRanking);
    param.set('count', abRoadApi.defaultSize);
    param.set('format', abRoadApi.format);
    param.set('callback', abRoadApi.callBack);

    let options: RequestOptionsArgs = {
      method: 'get',
      url: abRoadApi.url,
      search: param,
    };
    return new RequestOptions(options);
  }

  /** HTTPリクエストとレスポンス */
  reqData(config: RequestOptions): Observable<any> {
    return this.jsonp.request(config.url, config).pipe(map(response => {
      let tourData;
      let obj = response.json();

      if (obj.results.error) {
        let err = obj.results.error[0];
        tourData = {
          error: err.code,
          message: err.message
        }
      } else {
        let dataObj = obj.results.tour;
        tourData = {
          error: null,
          data: dataObj,
        };
      }
      return tourData;
    }))
  }
}