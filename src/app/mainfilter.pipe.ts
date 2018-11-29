import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mainfilter',
  pure: false
})
@Injectable()
export class MainfilterPipe {
  transform(value) {
    return value.filter((posts)=> {
      // filter out only Main courses
      return posts.type === 'main'
        /* && item.address.county === 'something else';*/
    });
  }
}
/*export class MainfilterPipe implements PipeTransform {
 transform(posts: any['main'], field: string, value: string): any[] {
   if (!posts) return [];
   return posts.filter(it => it[field] == value);
   /*return posts.type === 'main'*/
 /*}
}*/
