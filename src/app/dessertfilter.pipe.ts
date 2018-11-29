import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dessertfilter',
  pure: false
})
@Injectable()
export class DessertfilterPipe {
  transform(value) {
    return value.filter((posts)=> {
      // filter out only Dessert courses
      return posts.type === 'dessert'
        /* && item.address.county === 'something else';*/
    });
  }
}
