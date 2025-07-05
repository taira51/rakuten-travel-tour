import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { API_KEY } from '../common/api/api-key';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const abRoadApi = {
  /**
   * リクルートWebサービスで提供されている各APIは、機能の修正や追加によって各APIの構造が変わる場合があるとのこと。
   * バージョン別に管理されているので、 api_version は "1.02" で固定しておく。
   */
  api_version: "1.02",
  tourUrl: 'https://webservice.recruit.co.jp/ab-road/tour/v1',
  areaUrl: 'https://webservice.recruit.co.jp/ab-road/area/v1',
  key: API_KEY.abRoad,
  defaultSize: '30',
  sortRanking: '5',
  format: 'jsonp',
  callBack: 'JSONP_CALLBACK'
}

@Injectable()
export class OverseasTourPageService {

  constructor(private jsonp: Jsonp) { }

  getData(url, code, keyword?) {
    let param = this.setParam();
    param.set('area', code);
    
    if (keyword) {
      param.set('keyword', keyword);
    }

    let options: RequestOptionsArgs = {
      method: 'get',
      url: url,
      search: param,
    };
    return this.reqData(new RequestOptions(options));
  }

  /** ツアーデータ取得 */
  getTourData(area, keyword?): Observable<any> {
    return this.getData(abRoadApi.tourUrl, area, keyword);
  }

  /** エリア情報取得 */
  getAreaData(code?: string): Observable<any> {
    return this.getData(abRoadApi.areaUrl, code);
  }

  /** API 通信設定 */
  private setParam(): URLSearchParams {
    let param = new URLSearchParams();
    param.set('key', abRoadApi.key);
    param.set('order', abRoadApi.sortRanking);
    param.set('count', abRoadApi.defaultSize);
    param.set('format', abRoadApi.format);
    param.set('callback', abRoadApi.callBack);
    return param;
  }

  /** HTTPリクエストとレスポンス */
  private reqData(config: RequestOptions): Observable<any> {
    return this.jsonp.request(config.url, config).pipe(map(response => {
      let retData;
      let obj = response.json();

      if (obj.results.error) {
        let err = obj.results.error[0];
        retData = {
          error: err.code,
          message: err.message
        }
      } else {
        let dataObj = obj.results;
        retData = {
          error: null,
          data: dataObj,
        };
      }
      return retData;
    }))
  }
}