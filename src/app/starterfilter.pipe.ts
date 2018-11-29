import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starterfilter',
  pure: false
})
@Injectable()
export class StarterfilterPipe {
  transform(value) {
    return value.filter((posts)=> {
      // filter out only Starter courses
      return posts.type === 'starter'
        /* && item.address.county === 'something else';*/
    });
  }
}
