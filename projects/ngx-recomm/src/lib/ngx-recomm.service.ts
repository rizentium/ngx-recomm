import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxRecommService {

  constructor() {}

  getRecommendation(data: any[], basedOn: string, params: string[]) {
    const result = data.filter(item => {
      const based = item[basedOn] as any[];
      let length = 0;
      params.forEach(param => {
        if (based.includes(param)) {
          length++;
        }
      });
      if (length > 0) {
        return true;
      }
    });

    return result;
  }
}
