import { Component, OnInit } from '@angular/core';
import { MenudataService } from './menudata.service';
import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'menu',
  providers: [MenudataService],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
  /*pipes: [MenuMainPipe],*/
})

export class MenuComponent implements OnInit {

  posts = [];

  constructor(private _menu:MenudataService) { }

  ngOnInit() {
    this._menu.getMenuComponent()
/*      .subscribe(resMenuComponent => this.posts = resMenuComponent) */
        .subscribe(data => this.posts = data);
/*        .subscribe(data => console.log(this.posts.filter(data => {return data.id == data})));
        .subscribe(data => console.log(this.posts.filter(data => this.posts = data}))); */
  }

}
